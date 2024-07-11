import React, { useEffect, useState } from "react";
import {
  View,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
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
import { create } from "../../../Api/Apis";
import { REACT_APP_MOBILE_APP_URL } from "@env";

import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
function LoginSignUp({ navigation }: any) {
  const [isEnabled, setIsEnabled] = useState(true);
  // const toast = useToast();

  useEffect(() => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 👋",
    });
  }, []);

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
                      onSubmit={async (
                        values,
                        { setSubmitting, resetForm }
                      ) => {
                        try {
                          const url = `${REACT_APP_MOBILE_APP_URL}/authenticate/login`;
                          const data = {
                            url, // full URL
                            payload: {
                              username: values.username,
                              password: values.password,
                            },
                          };

                          const response = await create(data);
                          AsyncStorage.setItem(
                            "userResponse",
                            JSON.stringify(
                              response.data?.payload[0]?.userResponse?.name
                            )
                          );
                        
                          navigation.navigate(HOME_NAVIGATOR);

                          // AsyncStorage.setItem('userResponse',response.data?.payload);
                        } catch (error) {
                          console.error("Login Error:", error);
                        } finally {
                          setSubmitting(false);
                          resetForm();
                        }
                      }}
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
                              <Text style={{ color: "red" }}>
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
                              <Text style={{ color: "red" }}>
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
                              <Text style={{ color: "red" }}>
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
                              <Text style={{ color: "red" }}>
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
                              <Text style={{ color: "red" }}>
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
                              <Text style={{ color: "red" }}>
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
          </View>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
      {/* <AFBottomSafeAreView /> */}
    </>
  );
}

export default LoginSignUp;
