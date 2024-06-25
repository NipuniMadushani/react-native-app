import React, { useState } from "react";
import { View , FlatList, ScrollView, TouchableOpacity } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFTopImgView from "../../../Components/AFTopImgView";
import SVG from "../../../Utils/Assets/Svg";
import AFTimeBurnView from "../../../Components/AFTimeBurnRound";
import { styles } from "./styles";
import AFAboutExercise from "../../../Components/AFAboutExercise";
import AFSeeAllTitle from "../../../Components/AFSellAllTitle";
import AFButton from "../../../Components/AFButton";
import STRINGS from "../../../Utils/Constants/String";
import { challengesWorkOut } from "../../../Utils/Constants/String";
import AFProfileNameBox from "../../../Components/AFProfileNameBox";
import { Text } from "../../../Theme/Theme";
import { CHALLENGE_WORKOUT_VIDEO } from "../../../Navigator/HomeNavigator/HomeNavigator";

const ChallengesWorkout = ({ navigation }: any) => {
  const [like, setLike] = useState(false);
  const [showItem, setShowItem] = useState(false);

  const _backPress = () => {
    navigation.goBack();
  };

  const _StartWorkoutPress = () => {
    navigation.navigate(CHALLENGE_WORKOUT_VIDEO);
  };

  const _viewAllPress = () => {
    setShowItem(!showItem);
  };

  const _toggleLikePress = () => {
    setLike(!like);
  };

  

  const _workOutRender = ({ item, index }: any) => {
    return showItem || index < 5 ? (
      <AFProfileNameBox nameTitle={item.name} subTitle={item.min}  />
    ) : null;
  };

  return (
    <>
      <AFSafeAreView />
      <View style={styles.backView}>
        <AFTopImgView
          icon={like ? <SVG.HEART /> : <SVG.HEART_OUTLINE />}
          opPress={_toggleLikePress}
          backOnPress={_backPress}
          title={"Warm up"}
        />
        <AFTimeBurnView otherStyle={styles.calView} />
      </View>
      <ScrollView style={styles.container}>
        <AFAboutExercise
          about={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut...."
          }
        />
        <AFSeeAllTitle title="08 Exercises" />
        <View>
          <FlatList data={challengesWorkOut} renderItem={_workOutRender}/>
        </View>

        {!showItem && <TouchableOpacity style={styles.viewAllView} onPress={_viewAllPress}>
          <View style={styles.downArrowView}>
            <SVG.DOWN_ARROW />
          </View>
          <Text variant="inter_Medium_12" color="lime_green" style={styles.viewAllText} > {STRINGS.challengesWorkOut.viewAll}</Text>
        </TouchableOpacity>}

        <View style={{height: 100,}}></View>
      </ScrollView>

      <AFButton buttonTitle={STRINGS.challengesWorkOut.start} onPress={_StartWorkoutPress}/>

      <AFBottomSafeAreView />
    </>
  );
};

export default ChallengesWorkout;
