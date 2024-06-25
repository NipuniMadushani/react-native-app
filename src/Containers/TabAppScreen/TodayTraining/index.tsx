import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFTopImgView from "../../../Components/AFTopImgView";
import SVG from "../../../Utils/Assets/Svg";
import STRINGS from "../../../Utils/Constants/String";
import AFProfileNameBox from "../../../Components/AFProfileNameBox";
import { TodayTrainingData } from "../../../Utils/Constants/String";
import { theme } from "../../../Theme/Theme";
import { CHALLENGE_VIDEO } from "../../../Navigator/HomeNavigator/HomeNavigator";

const TodayTraining = ({ navigation }: any) => {
  const [like, setLike] = useState(false);

  const _backPress = () => {
    navigation.goBack();
  };

  const _exePress = () => {
    navigation.navigate(CHALLENGE_VIDEO);
  };

  const _toggleLikePress = () => {
    setLike(!like);
  };

  const _todayTrainingData = ({ item, index } : any) => {
    const isFocusItem = item.focus; // Check if item is index 0 or 1
    return (
      <AFProfileNameBox
        nameTitle={item.name}
        subTitle={item.min}
        focus={isFocusItem} // Pass isFocusItem as focus prop
        onPress={_exePress}
      />
    );
  };

  return (
    <>
      <AFSafeAreView />
      <AFTopImgView
        icon={like ? <SVG.HEART /> : <SVG.HEART_OUTLINE />}
        opPress={_toggleLikePress}
        backOnPress={_backPress}
        title={"Warm up"}
        exe
        exeTitle={"5 Exercises"}
      />
      <View style={styles.container}>
        <View style={{ height: 15 }}></View>
        {/* <AFProfileNameBox /> */}
        <FlatList
          data={TodayTrainingData}
          renderItem={_todayTrainingData}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default TodayTraining;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
});
