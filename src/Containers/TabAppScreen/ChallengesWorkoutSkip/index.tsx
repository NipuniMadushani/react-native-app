import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import Assets from "../../../Utils/Assets/Assets";
import { styles } from "./styles";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { theme, Text } from "../../../Theme/Theme";
import STRINGS from "../../../Utils/Constants/String";
import { fontPixel } from "../../../Utils/Responsive/Responsive";
import {  CHALLENGE_WORKOUT_VIDEO } from "../../../Navigator/HomeNavigator/HomeNavigator";

const ChallengesWorkoutSkip = ({navigation} : any) => {

  const _skipOnPress = () => {
    navigation.navigate(CHALLENGE_WORKOUT_VIDEO);
  };

  return (
    <>
      <AFSafeAreView />
      <View style={styles.imgBackRound}>
        <Image source={Assets.BackRound} style={styles.backImg} />
        <View style={styles.stickyView}>
          <View style={styles.secondView}>
            <Text variant="Inter_Regular_12" color="white" textAlign="center">
              {"+20 s"}
            </Text>
          </View>

          <View style={styles.progressCircle}>
            <AnimatedCircularProgress
              size={100}
              width={6}
              fill={60}
              tintColor={theme.colors.lime_green}
              // onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor={"#2C2C2C"}
              lineCap={"round"}
              backgroundWidth={1}
              tintTransparency={true}
              style={styles.progressBack}
              rotation={160}
            >
              {(fill) => (
                <View style={{ alignSelf: "center" }}>
                  <Text
                    variant="inter_SemiBold_17"
                    color="white"
                    textAlign="center"
                    style={styles.stepCount}
                  >
                    {"7"}
                  </Text>
                </View>
              )}
            </AnimatedCircularProgress>
          </View>

          <TouchableOpacity style={styles.secondView} onPress={_skipOnPress}>
            <Text variant="Inter_Regular_12" color="white" textAlign="center">
              {STRINGS.challengesWorkOutVideo.skip}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <Text variant="Inter_Regular_12" color="Cool_Gray" textAlign="left">
          {'Next 2/08'}
        </Text>
        <Text variant="inter_Medium_15" color="Rich_Black" textAlign="left" style={styles.secText}>
          {'Plank Jacks 00:30 sec'}
        </Text>

        <View style={styles.workOutView}>
          <Image source={Assets.SkipWorkout}/>
        </View>
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default ChallengesWorkoutSkip;
