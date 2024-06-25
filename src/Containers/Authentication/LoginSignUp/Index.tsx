import React, { useState } from "react";
import { View, TouchableOpacity, Pressable, Button } from "react-native";
import { styles } from "./styles";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFAuthBackView from "../../../Components/AFAuthBackView";
import { Text, theme } from "../../../Theme/Theme";
import AFTextInput from "../../../Components/AFTextInput";
import STRINGS from "../../../Utils/Constants/String";
import { getHeightBasedDimension } from "../../../Utils/Responsive/Responsive";
import SVG from "../../../Utils/Assets/Svg";
import { isIOS } from "../../../Helper/VersionCheck";
import AFHaveAccBottomView from "../../../Components/AFHaveAccBottomView";
import {
  ACTIVE,
  FORGOT_PASSWORD,
} from "../../../Navigator/AuthenticationNavigator/AuthenticationNavigator";
import AFToggleASwitch from "../../../Components/AFToggleSwitch";
import { HOME_NAVIGATOR } from "../../../Navigator/ApplicationNavigator";

const LoginSignUp = ({ navigation }: any) => {
  const [isEnabled, setIsEnabled] = useState(true);

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

  return (
    <>
      <AFSafeAreView />
      <View style={{ backgroundColor: "pink", flex: 1 }}>
        <AFAuthBackView
          onPress={_backPress}
          childrenComponent={
            <>
              <AFToggleASwitch
                toggleTextOne={STRINGS.login.logIn}
                toggleTextTwo={STRINGS.login.signUp}
                toggleSwitchOnPress={() => toggleSwitch(STRINGS.login.logIn)}
                isEnabled={isEnabled}
              />

              {isEnabled === true && (
                <>
                  <View style={{ height: getHeightBasedDimension() / 25 }}></View>
                  <View>
                    <AFTextInput title={STRINGS.common.email} value />
                    <View  style={{ height: getHeightBasedDimension() / 50 }}></View>
                    <AFTextInput
                      title={STRINGS.common.password}
                      secureTextEntry={true}
                      value
                    />
                  </View>
                  <Pressable onPress={() => navigation.navigate(FORGOT_PASSWORD)}>
                    <Text
                      variant="inter_Medium_12"
                      color="black"
                      textAlign="right"
                      style={styles.forPass}
                    >
                      {STRINGS.login.forgotPassword}
                    </Text>
                  </Pressable>
                </>
              )}

              {isEnabled === false && (
                <>
                  <View style={{ height: getHeightBasedDimension() / 25 }}></View>
                  <View>
                    <AFTextInput title={STRINGS.signUp.userName} value />
                    <View style={{ height: getHeightBasedDimension() / 50 }}></View>
                    <AFTextInput title={STRINGS.common.email} value />
                    <View style={{ height: getHeightBasedDimension() / 50 }}></View>
                    <AFTextInput
                      title={STRINGS.common.password}
                      secureTextEntry={true}
                      value
                    />
                    <View style={{ height: getHeightBasedDimension() / 50 }}></View>
                    <AFTextInput
                      title={STRINGS.common.comPass}
                      secureTextEntry={true}
                      value
                    />
                  </View>
                </>
              )}
            </>
          }
        />

        {isEnabled === true && (
          <View style={styles.bottomView}>
            <Text
              variant="inter_Medium_12"
              color="white"
              textAlign="center"
              style={styles.orText}
            >
              {STRINGS.login.or}
            </Text>
            <View style={styles.socialView}>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <SVG.GOOGLE />
              </TouchableOpacity>
              {isIOS() && (
                <>
                  <View style={{ width: 20 }} />
                  <TouchableOpacity>
                    <SVG.APPLE />
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        )}

        {isEnabled === true && (
          <AFHaveAccBottomView
            titleOne={STRINGS.login.dontAcc}
            titleTwo={STRINGS.login.signUp}
            onPress={_loginNextPress}
            titleOnPress={_signInPress}
          />
        )}
        {isEnabled === false && (
          <AFHaveAccBottomView
            titleOne={STRINGS.signUp.alreadyAcc}
            titleTwo={STRINGS.signUp.signIn}
            onPress={_SignUpNextPress}
            titleOnPress={_signUpPress}
          />
        )}
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default LoginSignUp;
