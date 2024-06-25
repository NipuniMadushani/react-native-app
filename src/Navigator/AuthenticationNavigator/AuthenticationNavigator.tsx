import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, StyleSheet} from 'react-native';
import SplashScreen from '../../Containers/Authentication/Splash';
import { theme } from '../../Theme/Theme';
import AFStatusBar from '../../Components/AFStatusBar/AFStatusBar';
import OnBoardingScreen from '../../Containers/Authentication/OnBoarding';
import LoginSignUp from '../../Containers/Authentication/LoginSignUp/Index';
import ForgotPasswordScreen from '../../Containers/Authentication/ForgotPassword';
import VerificationScreen from '../../Containers/Authentication/Verification';
import ResetPasswordScreen from '../../Containers/Authentication/ResetPassword';
import ActiveScreen from '../../Containers/AddInfoDetails/ActiveScreen';
import GenderInfo from '../..//Containers/AddInfoDetails/GenderInfo';
import TargetAreaInfo from '../../Containers/AddInfoDetails/TargetAreaInfo';
import HeightWeightInfo from '../../Containers/AddInfoDetails/HeightWeightInfoScreen';
import SubscriptionScreen from '../../Containers/AddInfoDetails/Subscription';

export const SPLASH = 'Splash';
export const ONBOARDING = 'OnBoarding';
export const LOGIN_SIGHUP = 'LoginSignUp';
export const FORGOT_PASSWORD = 'ForgotPassword';
export const VERIFICATION = 'Verification';
export const RESET_PASSWORD = 'ResetPassword';
export const ACTIVE = 'Active';
export const GENDER_INFO = 'Gender';
export const TARGET_INFO = 'TargetArea';
export const HEIGHT_WEIGHT_INFO = 'HeightWeightInfo';
export const SUBSCRIPTION_SCREEN = 'Subscription';

const Stack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <>
      <AFStatusBar />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}
      >
        <Stack.Screen name={SPLASH}  component={SplashScreen}  />
        <Stack.Screen name={ONBOARDING}  component={OnBoardingScreen}  />
        <Stack.Screen name={LOGIN_SIGHUP}  component={LoginSignUp}  />
        <Stack.Screen name={FORGOT_PASSWORD}  component={ForgotPasswordScreen}  />
        <Stack.Screen name={VERIFICATION}  component={VerificationScreen}  />
        <Stack.Screen name={RESET_PASSWORD}  component={ResetPasswordScreen}  />
        <Stack.Screen name={ACTIVE}  component={ActiveScreen}  />
        <Stack.Screen name={GENDER_INFO}  component={GenderInfo}  />
        <Stack.Screen name={TARGET_INFO}  component={TargetAreaInfo}  />
        <Stack.Screen name={HEIGHT_WEIGHT_INFO}  component={HeightWeightInfo}  />
        <Stack.Screen name={SUBSCRIPTION_SCREEN}  component={SubscriptionScreen}  />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});

export default AuthenticationNavigator;
