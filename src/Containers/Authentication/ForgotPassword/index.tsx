import React from "react";
import { View, Text } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFAuthBackView from "../../../Components/AFAuthBackView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFAuthScreenTitle from "../../../Components/AFAuthScreenTitle";
import STRINGS from "../../../Utils/Constants/String";
import AFTextInput from "../../../Components/AFTextInput";
import { getHeightBasedDimension } from "../../../Utils/Responsive/Responsive";
import AFHaveAccBottomView from "../../../Components/AFHaveAccBottomView";
import { VERIFICATION } from "../../../Navigator/AuthenticationNavigator/AuthenticationNavigator";
import { styles } from "./styles";

const ForgotPasswordScreen = ({ navigation }: any) => {
  const _backPress = () => {
    navigation.goBack();
  };

  const _forgotPassNextPress = () => {
    navigation.navigate(VERIFICATION);
  };

  return (
    <>
      <AFSafeAreView />
      <View style={styles.container}>
        <AFAuthBackView
          onPress={_backPress}
          childrenComponent={
            <>
              <AFAuthScreenTitle title={STRINGS.forgotPassword.title} />
              <View style={{ height: getHeightBasedDimension() / 18 }}></View>
              <AFTextInput title={STRINGS.common.email} value />
              <View style={{ height: getHeightBasedDimension() / 10 }}></View>
            </>
          }
        />
        <AFHaveAccBottomView onPress={_forgotPassNextPress} />
      </View>

      <AFBottomSafeAreView />
    </>
  );
};

export default ForgotPasswordScreen;
