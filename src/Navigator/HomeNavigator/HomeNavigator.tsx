import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from "../BottomTabNavigator/Maintab";
import AFStatusBar from "../../Components/AFStatusBar/AFStatusBar";
import { theme } from "../../Theme/Theme";
import AllChallenges from "../../Containers/TabAppScreen/AllChallenges";
import AllStretch from "../../Containers/TabAppScreen/AllStretch";
import TodayTraining from "../../Containers/TabAppScreen/TodayTraining";
import ChallengesVideo from "../../Containers/TabAppScreen/ChallengesVideo";
import NotificationMessage from "../../Containers/TabAppScreen/NotificationMessage";
import AllNotification from "../../Containers/TabAppScreen/AllNotification";
import FavoriteScreen from "../../Containers/TabAppScreen/Favorite"; 
import ChallengesWorkout from "../../Containers/TabAppScreen/ChallengesWorkout";
import ChallengesWorkoutVideo from "../../Containers/TabAppScreen/ChallengesWorkoutVideo";
import ChallengesWorkoutSkip from "../../Containers/TabAppScreen/ChallengesWorkoutSkip";
import EditProfile from "../../Containers/TabAppScreen/EditProfile";
import FaqScreen from "../../Containers/TabAppScreen/FAQ";
import PrivacyPolicyScreen from "../../Containers/TabAppScreen/PrivacyPolicy";
import CouchProfileScreen from "../../Containers/TabAppScreen/CouchProfile";
import ChatWithCouch from "../../Containers/TabAppScreen/ChatWithCouch";
import AllPlanWorkout from "../../Containers/TabAppScreen/AllPlanWorkOut";
import ChatListScreen from "../../Containers/TabAppScreen/ChatList";


export const HOME_MAIN_TAB = 'MainTabBar';
export const ALL_CHALLENGES = 'AllChallenges';
export const ALL_STRETCH = 'AllStretch';
export const TODAY_TRAINING = 'TodayTraining';
export const CHALLENGE_VIDEO = 'ChallengesVideo';
export const NOTIFICATION_MESSAGE = 'NotificationMessage';
export const ALL_NOTIFICATION = 'AllNotification';
export const FAVORITE = 'Favorite';
export const CHAT_LIST = 'ChatList';
export const CHALLENGE_WORKOUT = 'ChallengesWorkout';
export const CHALLENGE_WORKOUT_VIDEO = 'ChallengesWorkoutVideo';
export const CHALLENGE_WORKOUT_SKIP = 'ChallengesWorkoutSkip';
export const EDIT_PROFILE = 'EditProfile';
export const FAQ = 'Faq';
export const PRIVACY_POLICY = 'PrivacyPolicy';
export const COUCH_PROFILE = 'CouchProfileScreen';
export const CHAT_WITH_COUCH = 'ChatWithCouch';
export const ALL_PLAN_WORKOUT = 'AllPlanWorkout';


const Stack = createStackNavigator();
const HomeNavigator = () => {
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
        <Stack.Screen name={HOME_MAIN_TAB}  component={MainTab}  />
        <Stack.Screen name={ALL_CHALLENGES}  component={AllChallenges}  />
        <Stack.Screen name={ALL_STRETCH}  component={AllStretch}  />
        <Stack.Screen name={TODAY_TRAINING}  component={TodayTraining}  />
        <Stack.Screen name={CHALLENGE_VIDEO}  component={ChallengesVideo}  />
        <Stack.Screen name={NOTIFICATION_MESSAGE}  component={NotificationMessage}  />
        <Stack.Screen name={ALL_NOTIFICATION}  component={AllNotification}  />
        <Stack.Screen name={FAVORITE}  component={FavoriteScreen}  />
        <Stack.Screen name={CHAT_LIST}  component={ChatListScreen}  />
        <Stack.Screen name={CHALLENGE_WORKOUT}  component={ChallengesWorkout}  />
        <Stack.Screen name={CHALLENGE_WORKOUT_VIDEO}  component={ChallengesWorkoutVideo}  />
        <Stack.Screen name={CHALLENGE_WORKOUT_SKIP}  component={ChallengesWorkoutSkip}  />
        <Stack.Screen name={EDIT_PROFILE}  component={EditProfile}  />
        <Stack.Screen name={FAQ}  component={FaqScreen}  />
        <Stack.Screen name={PRIVACY_POLICY}  component={PrivacyPolicyScreen}  />
        <Stack.Screen name={COUCH_PROFILE}  component={CouchProfileScreen}  />
        <Stack.Screen name={CHAT_WITH_COUCH}  component={ChatWithCouch}  />
        <Stack.Screen name={ALL_PLAN_WORKOUT}  component={AllPlanWorkout}  />
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

export default HomeNavigator;
