import React, { Component } from "react";
import { View,  Image,  FlatList, ScrollView, } from "react-native";
import { styles } from "./styles";
import { theme, Text } from "../../../Theme/Theme";
import STRINGS, {  ChallengesData, TrainingData, StretchingData, } from "../../../Utils/Constants/String";
import Assets from "../../../Utils/Assets/Assets";
import AFAuthBackView from "../../../Components/AFAuthBackView";
import AFBackButton from "../../../Components/AFBackButton";
import { fontPixel } from "../../../Utils/Responsive/Responsive";
import AFBox from "../../../Components/AFBox";
import SVG from "../../../Utils/Assets/Svg";
import AFTrackerBox from "../../../Components/AFHomeTrackerBox";
import AFSeeAllTitle from "../../../Components/AFSellAllTitle";
import AFChallengesWorkout from "../../../Components/AFChallengesWorkout";
import AFTabBarVIew from "../../../Components/AFTabBarView";
import AFStretchView from "../../../Components/AFStretchView";
import { ALL_CHALLENGES, ALL_STRETCH, CHALLENGE_WORKOUT, FAVORITE, NOTIFICATION_MESSAGE, TODAY_TRAINING } from "../../../Navigator/HomeNavigator/HomeNavigator";
import AFTrainingView from "../../../Components/AFTrainingView";

const HomeTab = ({ navigation }: any) => {

  const _challengesPress = () => {
    navigation.navigate(ALL_CHALLENGES);
  };

  const _stretchPress = () => {
    navigation.navigate(ALL_STRETCH);
  };

  const _trainingOnPress = () => {
    navigation.navigate(TODAY_TRAINING);
  };

  const _notificationMsgPress = () => {
    navigation.navigate(NOTIFICATION_MESSAGE);
  };

  const _favouritePress = () => {
    navigation.navigate(FAVORITE);
  };

  const _startOnPress = () => {
    navigation.navigate(CHALLENGE_WORKOUT);
  };

  const _stretchItemPress = () => {
    navigation.navigate(CHALLENGE_WORKOUT);
  };

  const _trainingRender = ({ item, index }: any) => {
    const lastItem = index === TrainingData.length - 1;
    return (
      <AFTrainingView
        onPress={_trainingOnPress}
        imageSource={item.image}
        workOutName={item.workOutName}
        workout={item.workout}
        min={item.min}
        isLastItem={lastItem}
      />
    );
  };

  const _challengesWorkOutRender = ({ item, index }: any) => {
    if (index < 3) {
      return (
        <AFChallengesWorkout
          startOnPress={_startOnPress}
          img={item.image}
          titleName={item.workOutName}
        />
      );
    }
    return null;
  };

  const _stretchWorkOutRender = ({ item, index }: any) => {

    if (index < 2) {
      return (
        <AFStretchView
          img={item.image}
          workoutName={item.workOutName}
          min={item.min}
          onPress={_stretchItemPress}
        />
      );
    }
    return null;
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Image source={Assets.homeBack} style={styles.backImgView} />
        <View style={styles.spaceView}>
          <View style={styles.userNameFlexView}>
            <View style={styles.nameView}>
              <Text
                variant="inter_Medium_12"
                color="black"
                textAlign="left"
                fontSize={fontPixel(17.8)}
              >
                {STRINGS.homeScreen.userName}
              </Text>
            </View>

            <AFBox icon={<SVG.MESSAGE />} onPress={_notificationMsgPress} />
            <View style={{ width: 10 }}></View>
            <AFBox icon={<SVG.HEART_OUTLINE />} onPress={_favouritePress} />
          </View>

          <View style={styles.trackFlexView}>
            <AFTrackerBox
              fill={80}
              type={STRINGS.homeScreen.step}
              title={STRINGS.homeScreen.stepTracker}
              time={"Last update 3min"}
            />
            <AFTrackerBox
              fill={75}
              type={STRINGS.homeScreen.cal}
              title={STRINGS.homeScreen.caloriesBurn}
              time={"Last update 5min"}
            />
          </View>

          <AFSeeAllTitle title={STRINGS.homeScreen.todayTraining} />
          <View>
            <FlatList
              data={TrainingData}
              renderItem={_trainingRender}
              horizontal
            />
          </View>
          <AFSeeAllTitle
            title={STRINGS.homeScreen.challenge}
            seeAll
            seeAllPress={_challengesPress}
          />
          <View>
            <FlatList
              data={ChallengesData}
              renderItem={_challengesWorkOutRender}
              // horizontal
              numColumns={3}
              columnWrapperStyle={styles.columnWrapper}
            />
          </View>
          <AFSeeAllTitle
            title={STRINGS.homeScreen.stretch}
            seeAll
            seeAllPress={_stretchPress}
          />
          <View>
            <FlatList
              data={StretchingData}
              renderItem={_stretchWorkOutRender}
              // horizontal
              numColumns={2}
              columnWrapperStyle={styles.columnWrapper}
            />
          </View>
          <View style={styles.bannerView}>
            <Image source={Assets.FitnessBanner} style={styles.fitnessBanner} />
          </View>
        </View>
      </ScrollView>
      <AFTabBarVIew />
    </>
  );
};

export default HomeTab;
