import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import AFBackButton from "../../../Components/AFBackButton";
import { styles } from "./styles";
import AFBox from "../../../Components/AFBox";
import SVG from "../../../Utils/Assets/Svg";
import Assets from "../../../Utils/Assets/Assets";
import { Text, theme } from "../../../Theme/Theme";
import STRINGS from "../../../Utils/Constants/String";
import {
  CHALLENGE_VIDEO,
  CHALLENGE_WORKOUT_SKIP,
} from "../../../Navigator/HomeNavigator/HomeNavigator";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";

const ChallengesWorkoutVideo = ({ navigation }: any) => {
  const [progress, setProgress] = useState(50);
  const videoDuration = 15;
  const intervalTime = 1000;
  let interval: any = null;

  const _backPress = () => {
    navigation.goBack();
  };

  const _volumePress = () => {
    console.log("Volume press ...");
  };

  const _videoCallPress = () => {
    navigation.navigate(CHALLENGE_VIDEO);
  };

  const _skipPress = () => {
    navigation.navigate(CHALLENGE_WORKOUT_SKIP);
  };

  const _previousPress = () => {
    console.log("Previous press ...");
  };

  // Function to start the video progress
  // const startVideo = () => {
  //   const interval = setInterval(() => {
  //     setProgress(prevProgress => {
  //       if (prevProgress >= 100) {
  //         clearInterval(interval);
  //         return 100;
  //       }
  //       return prevProgress + (intervalTime / (videoDuration * 10));
  //     });
  //   }, intervalTime);
  // };

  // useEffect(() => {
  //   startVideo(); // Start the video progress when component mounts
  //   return () => clearInterval(interval); // Clean up the interval on component unmount
  // }, []);

  return (
    <>
      <AFSafeAreView />
      <AFBackButton title={"1/08"} onPress={_backPress} />
      <View style={styles.container}>
        <View style={styles.boxView}>
          <View style={styles.afBoxFlexView}>
            <AFBox icon={<SVG.VOLUME />} onPress={_volumePress} />
            <View style={{ width: 10 }}></View>
            <AFBox icon={<SVG.VIDEO_CALL />} onPress={_videoCallPress} />
          </View>
          <View style={styles.workOutView}>
            <Image source={Assets.ChallengesWorkOut} />
          </View>
        </View>

        <View style={styles.workOutNameView}>
          <Text
            variant="inter_Medium_17"
            color="Rich_Black"
            textAlign="center"
            style={styles.workOutTitleText}
          >
            {"Plank"}
          </Text>
        </View>

        <View style={styles.workOutNameView}>
          <Text
            variant="inter_SemiBold_17"
            color="Rich_Black"
            textAlign="center"
            fontWeight={"600"}
            style={styles.timeText}
          >
            {"00:15"}
          </Text>
          <View style={styles.progressBarView}>
            <View style={styles.playFlexView}>
              <SVG.BIG_PLAY style={{ alignSelf: "center", marginRight: 10 }} />
              <View style={{ justifyContent: "center" }}>
                <Text
                  variant="inter_Medium_12"
                  color="white"
                  textAlign="center"
                >
                  {STRINGS.challengesWorkOutVideo.pause}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.button,
                {
                  width: `${progress}%`,
                  borderTopRightRadius: progress === 100 ? 100 : 0,
                  borderBottomRightRadius: progress === 100 ? 100 : 0,
                },
              ]}
            ></View>
          </View>
        </View>

        <View style={styles.skipflexView}>
          <TouchableOpacity style={styles.flexView} onPress={_previousPress}>
            <View style={styles.arrowView}>
              <SVG.PREVIOUS />
            </View>
            <Text
              variant="inter_Medium_12"
              color="Cool_Gray"
              textAlign="center"
            >
              {STRINGS.challengesWorkOutVideo.pre}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexView} onPress={_skipPress}>
            <Text
              variant="inter_Medium_12"
              color="lime_green"
              textAlign="center"
            >
              {STRINGS.challengesWorkOutVideo.skip}
            </Text>
            <View style={styles.arrowView}>
              <SVG.SKIP />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default ChallengesWorkoutVideo;
