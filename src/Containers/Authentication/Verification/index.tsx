import React, { useState, useRef } from "react";
import { View, TextInput } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFAuthBackView from "../../../Components/AFAuthBackView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFAuthScreenTitle from "../../../Components/AFAuthScreenTitle";
import STRINGS from "../../../Utils/Constants/String";
import { getHeightBasedDimension } from "../../../Utils/Responsive/Responsive";
import AFHaveAccBottomView from "../../../Components/AFHaveAccBottomView";
import { RESET_PASSWORD,} from "../../../Navigator/AuthenticationNavigator/AuthenticationNavigator";
import { styles } from "./styles";

const VerificationScreen = ({ onComplete = () => {}, navigation }: any) => {
  const [otp, setOtp] = useState(["1", "5", "", ""]);
  const refs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const _backPress = () => {
    navigation.goBack();
  };

  const _forgotPassNextPress = () => {
    navigation.navigate(RESET_PASSWORD);
  };

  const _resendOnPress = () => {
    // navigation.navigate('');
  };

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      refs[index + 1].current?.focus(); // Move focus to the next input
    }

    if (newOtp.every((code) => code !== "")) {
      onComplete(newOtp.join("")); // Fire onComplete when all inputs are filled
    }
  };

  const handleBackspace = (index: number) => {
    if (index > 0 && !otp[index]) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      refs[index - 1].current?.focus(); // Move focus to the previous input
    }
  };

  return (
    <>
      <AFSafeAreView />
      <View style={styles.container}>
        <AFAuthBackView
          onPress={_backPress}
          childrenComponent={
            <>
              <AFAuthScreenTitle title={STRINGS.verification.title} />
              <View style={{ height: getHeightBasedDimension() / 18 }}></View>
              {/* <AFTextInput title={STRINGS.common.email} value /> */}
              <View style={styles.otpContainer}>
                {otp.map((value, index) => (
                  <TextInput
                    key={index}
                    style={styles.roundedTextInput}
                    value={value}
                    onChangeText={(text) => handleOtpChange(text, index)}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={refs[index]}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === "Backspace") {
                        handleBackspace(index);
                      }
                    }}
                  />
                ))}
              </View>
              <View style={{ height: getHeightBasedDimension() / 10 }}></View>
            </>
          }
        />
        <AFHaveAccBottomView
          titleOne={STRINGS.verification.receiveCode}
          titleTwo={STRINGS.verification.resend}
          onPress={_forgotPassNextPress}
          titleOnPress={_resendOnPress}
        />
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default VerificationScreen;
