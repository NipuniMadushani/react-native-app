import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "./styles";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFAuthBackView from "../../../Components/AFAuthBackView";
import AFTextInput from "../../../Components/AFTextInput";
import STRINGS from "../../../Utils/Constants/String";
import { getHeightBasedDimension } from "../../../Utils/Responsive/Responsive";
import AFHaveAccBottomView from "../../../Components/AFHaveAccBottomView";
import {
  ACTIVE,
  FORGOT_PASSWORD,
  ONBOARDING,
} from "../../../Navigator/AuthenticationNavigator/AuthenticationNavigator";
import AFToggleASwitch from "../../../Components/AFToggleSwitch";
import { HOME_NAVIGATOR } from "../../../Navigator/ApplicationNavigator";
import AFButton from "../../../Components/AFButton";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { create, login } from "../../../Api/Apis";
import { REACT_APP_MOBILE_APP_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomModalAlert from "../../../Components/AFCustomModels/CustomModalAlert";
import { theme } from "../../../Theme/Theme";
import NetInfo from "@react-native-community/netinfo";
import ToastMessage from "../../../Components/AFToastMessage";
import * as Keychain from "react-native-keychain";
function LoginSignUp({ navigation }) {
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isConnected, setIsConnected] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastData, setToastData] = useState({
    type: "info",
    title: "",
    message: "",
    position: "",
  });

  const animation = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // Only proceed if isInternetReachable is NOT null
      if (state.isInternetReachable !== null) {
        setIsConnected(state.isConnected && state.isInternetReachable);
      }
    });

    return () => unsubscribe();
  }, []);

  const isFirstRun = useRef(true); //  Track if it's the first execution

  useEffect(() => {
    if (isConnected === null) return;

    //  Skip online toast on first load
    if (isFirstRun.current) {
      isFirstRun.current = false;

      if (!isConnected) {
        // Show only offline on first load
        showToast(
          "error",
          "No Internet Connection",
          "Please check your connection.",
          "top-center"
        );
      }
      return;
    }

    //  Show toast on subsequent network changes
    const type = isConnected ? "success" : "error";
    const title = isConnected ? "Internet Connected" : "No Internet Connection";
    const message = isConnected
      ? "You are online now."
      : "Please check your connection.";

    showToast(type, title, message, "top-center");
  }, [isConnected]);

  const showToast = (type, title, message, position) => {
    setToastData({ type, title, message, position });
    setToastVisible(true);

    // Slide in
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Slide out only if connected
    if (type === "success") {
      const timeout = setTimeout(() => {
        Animated.timing(animation, {
          toValue: -100,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setToastVisible(false));
      }, 3000);

      // Cleanup
      return () => clearTimeout(timeout);
    }
  };
  const _backPress = () => {
    navigation.goBack();
  };

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const _loginNextPress = () => {
    navigation.navigate(HOME_NAVIGATOR);
  };

  const _SignUpNextPress = () => {
    navigation.navigate(ACTIVE);
  };

  const _signInPress = () => {
    setIsEnabled(!isEnabled);
  };

  const _signUpPress = () => {
    setIsEnabled(true);
  };

  const _activeNextPress = () => {};

  const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const signUpValidationSchema = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    comPass: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleOnlineLogin = async (values) => {
    console.warn("online");
    try {
      const url = "http://10.0.2.2:8087/api/v1/authenticate";
      const data = {
        url,
        payload: {
          username: values.username,
          password: values.password,
        },
      };

      const response = await login(data);
      const status = response?.data?.status;

      if (status === 200) {
        const user = response.data?.payload[0]?.user;
        const token = response.data?.payload[0]?.token;
        if (user && token) {
          // Save token as password, and user as serialized JSON in username field
          await saveCredentialToKeychain({
            user,
            token,
            username: values.username,
            password: values.password,
          });

          return { success: true, message: "Login successful" };
        } else {
          return { success: false, message: "Invalid server response" };
        }
      } else {
        return { success: false, message: "Invalid server response" };
      }
    } catch (error) {
      if (error?.response?.status === 404) {
        return {
          success: false,
          message: error?.response?.data?.errorMessages || "User not found",
        };
      } else {
        return {
          success: false,
          message:
            "Login unsuccessful. Please verify your username and password.",
        };
      }
    }
  };

  const saveCredentialToKeychain = async ({
    user,
    token,
    username,
    password,
  }) => {
    try {
      const loginTime = new Date().getTime();

      // 1. Retrieve existing credentials
      const existing = await Keychain.getGenericPassword();
      let list = [];

      if (existing) {
        try {
          list = JSON.parse(existing.username); // `username` holds the serialized list
          if (!Array.isArray(list)) list = []; // fallback safety
        } catch (e) {
          list = [];
        }
      }

      // 2. Create new entry
      const newEntry = { user, token, loginTime, username, password };

      // 3. Remove any previous entries for same username
      list = list.filter((entry) => entry.username !== username);

      // 4. Add new entry to list
      list.push(newEntry);

      // 5. Save back the updated list
      await Keychain.setGenericPassword(JSON.stringify(list), "cached_token");
    } catch (error) {
      console.error(" Failed to save credentials to Keychain:", error);
    }
  };

  const handleLogin = async (values) => {
    try {
      const credentials = await Keychain.getGenericPassword();

      if (credentials) {
        const cachedList = JSON.parse(credentials.username);

        if (Array.isArray(cachedList)) {
          const now = Date.now();
          const validEntries = cachedList.filter(
            (entry) => now - entry.loginTime < ONE_DAY_MS
          );

          // Find matching credentials
          const matchingEntry = validEntries.find(
            (entry) =>
              entry.username === values.username &&
              entry.password === values.password
          );

          if (matchingEntry) {
            const { loginTime, user, token } = matchingEntry;
            console.log("✅ Using cached credentials");
            setModalMessage("Login successful (cached):" + loginTime);
            setIsSuccess(true);
            setModalVisible(true);
            await Keychain.setGenericPassword(
              JSON.stringify(validEntries),
              credentials.password
            );
            return;
            // }
          } else {
            await Keychain.setGenericPassword(
              JSON.stringify(validEntries),
              credentials.password
            );
          }
        } else {
          console.warn(" Cached data is not in expected format");
        }
      }

      // ✅ Only fallback if no matching/valid cached credentials
      if (isConnected) {
        return await handleOnlineLogin(values);
      } else {
        setModalMessage(
          "You're currently offline. Please check your internet connection to log in."
        );
        setIsSuccess(false);
        setModalVisible(true);
      }
    } catch (error) {
      console.error(" Error processing login:", error);

      setModalMessage("An unexpected error occurred. Please try again.");
      setIsSuccess(false);
      setModalVisible(true);
    }
  };

  return (
    <>
      <AFSafeAreView />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          enableOnAndroid={true}
          extraScrollHeight={Platform.OS === "ios" ? 20 : 100}
        >
          <View style={{ backgroundColor: "pink", flex: 1 }}>
            <AFAuthBackView
              onPress={_backPress}
              childrenComponent={
                <>
                  <AFToggleASwitch
                    toggleTextOne={STRINGS.login.logIn}
                    toggleTextTwo={STRINGS.login.signUp}
                    toggleSwitchOnPress={toggleSwitch}
                    isEnabled={isEnabled}
                  />

                  {isEnabled ? (
                    <Formik
                      initialValues={{ username: "", password: "" }}
                      validationSchema={loginValidationSchema}
                      onSubmit={async (values, { setSubmitting }) => {
                        const result = await handleLogin(values);

                        setIsSuccess(result.success);
                        setModalMessage(result.message);
                        setModalVisible(true);
                        setSubmitting(false);
                      }}
                      // onSubmit={async (
                      //   values,
                      //   { setSubmitting, resetForm }
                      // ) => {
                      //     const isConnected = await NetInfo.fetch().then(state => state.isConnected);
                      //     console.warn("isConnected:"+isConnected);
                      //   try {
                      //     const url =
                      //       "http://10.0.2.2:8087/api/v1/authenticate";
                      //     const data = {
                      //       url,
                      //       payload: {
                      //         username: values.username,
                      //         password: values.password,
                      //       },
                      //     };

                      //     console.warn("Calling URL:", url);
                      //     const response = await login(data);
                      //     console.warn(response);
                      //     const status = response?.data?.status;

                      //     if (status === 200) {
                      //       // Login success
                      //       AsyncStorage.setItem(
                      //         "user",
                      //         JSON.stringify(response.data?.payload[0]?.user)
                      //       );
                      //       AsyncStorage.setItem(
                      //         "token",
                      //         JSON.stringify(response.data?.payload[0]?.token)
                      //       );

                      //       setIsSuccess(true);
                      //       setModalMessage("Login Successful");
                      //     }
                      //   } catch (error) {
                      //     console.error("Login Error:", error);
                      //     console.warn(error?.response?.data?.errorMessages);
                      //     // Network or unexpected error
                      //     if (error.response) {
                      //       if (error.response.status == 404) {
                      //         setModalMessage(
                      //           error?.response?.data?.errorMessages
                      //         );
                      //       } else {
                      //         setModalMessage(
                      //           "Login unsuccessful. Please verify your username and password."
                      //         );
                      //       }
                      //     }
                      //     setIsSuccess(false);
                      //   } finally {
                      //     setModalVisible(true);
                      //     setSubmitting(false);
                      //   }
                      // }}
                    >
                      {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                      }) => (
                        <>
                          <View
                            style={{ height: getHeightBasedDimension() / 25 }}
                          ></View>
                          <View>
                            <AFTextInput
                              title={STRINGS.common.username}
                              value={values.username}
                              onChangeText={handleChange("username")}
                              onBlur={handleBlur("username")}
                            />
                            {errors.username && touched.username && (
                              <Text
                                style={{ color: theme.colors.Title_Color_Red }}
                              >
                                {errors.username}
                              </Text>
                            )}
                            <View
                              style={{ height: getHeightBasedDimension() / 50 }}
                            ></View>
                            <AFTextInput
                              title={STRINGS.common.password}
                              secureTextEntry={true}
                              value={values.password}
                              onChangeText={handleChange("password")}
                              onBlur={handleBlur("password")}
                            />
                            {errors.password && touched.password && (
                              <Text
                                style={{ color: theme.colors.Title_Color_Red }}
                              >
                                {errors.password}
                              </Text>
                            )}
                          </View>
                          <Pressable
                            onPress={() => navigation.navigate(FORGOT_PASSWORD)}
                          >
                            <Text
                              variant="inter_Medium_12"
                              color="black"
                              textAlign="right"
                              style={styles.forPass}
                            >
                              {STRINGS.login.forgotPassword}
                            </Text>
                          </Pressable>
                          <AFButton
                            buttonTitle={STRINGS.login.logIn}
                            onPress={handleSubmit}
                          />
                        </>
                      )}
                    </Formik>
                  ) : (
                    <Formik
                      initialValues={{
                        userName: "",
                        email: "",
                        password: "",
                        comPass: "",
                      }}
                      validationSchema={signUpValidationSchema}
                      onSubmit={(values) => console.log(values)}
                    >
                      {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                      }) => (
                        <>
                          <View
                            style={{ height: getHeightBasedDimension() / 25 }}
                          ></View>
                          <View>
                            <AFTextInput
                              title={STRINGS.signUp.userName}
                              value={values.userName}
                              onChangeText={handleChange("userName")}
                              onBlur={handleBlur("userName")}
                            />
                            {errors.userName && touched.userName && (
                              <Text
                                style={{ color: theme.colors.Title_Color_Red }}
                              >
                                {errors.userName}
                              </Text>
                            )}
                            <View
                              style={{ height: getHeightBasedDimension() / 50 }}
                            ></View>
                            <AFTextInput
                              title={STRINGS.common.email}
                              value={values.email}
                              onChangeText={handleChange("email")}
                              onBlur={handleBlur("email")}
                            />
                            {errors.email && touched.email && (
                              <Text
                                style={{ color: theme.colors.Title_Color_Red }}
                              >
                                {errors.email}
                              </Text>
                            )}
                            <View
                              style={{ height: getHeightBasedDimension() / 50 }}
                            ></View>
                            <AFTextInput
                              title={STRINGS.common.password}
                              secureTextEntry={true}
                              value={values.password}
                              onChangeText={handleChange("password")}
                              onBlur={handleBlur("password")}
                            />
                            {errors.password && touched.password && (
                              <Text
                                style={{ color: theme.colors.Title_Color_Red }}
                              >
                                {errors.password}
                              </Text>
                            )}
                            <View
                              style={{ height: getHeightBasedDimension() / 50 }}
                            ></View>
                            <AFTextInput
                              title={STRINGS.common.comPass}
                              secureTextEntry={true}
                              value={values.comPass}
                              onChangeText={handleChange("comPass")}
                              onBlur={handleBlur("comPass")}
                            />
                            {errors.comPass && touched.comPass && (
                              <Text
                                style={{ color: theme.colors.Title_Color_Red }}
                              >
                                {errors.comPass}
                              </Text>
                            )}
                          </View>
                        </>
                      )}
                    </Formik>
                  )}
                </>
              }
            />

            {isEnabled ? (
              <AFHaveAccBottomView
                titleOne={STRINGS.login.dontAcc}
                titleTwo={STRINGS.login.signUp}
                onPress={_loginNextPress}
                titleOnPress={_signInPress}
              />
            ) : (
              <AFHaveAccBottomView
                titleOne={STRINGS.signUp.alreadyAcc}
                titleTwo={STRINGS.signUp.signIn}
                onPress={_SignUpNextPress}
                titleOnPress={_signUpPress}
              />
            )}
            {modalVisible ? (
              <CustomModalAlert
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                success={isSuccess}
                message={modalMessage}
              />
            ) : (
              ""
            )}

            <ToastMessage
              type={toastData.type}
              title={toastData.title}
              message={toastData.message}
              visible={toastVisible}
              animation={animation}
              position={toastData.position}
            />
          </View>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
      {/* <AFBottomSafeAreView /> */}
    </>
  );
}

export default LoginSignUp;
