import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS from "../../../Utils/Constants/String";
import { ChallengesData } from "../../../Utils/Constants/String";
import AFChallengesWorkout from "../../../Components/AFChallengesWorkout";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import { CHALLENGE_WORKOUT } from "../../../Navigator/HomeNavigator/HomeNavigator";
import { theme } from "../../../Theme/Theme";

const AllChallenges = ({ navigation }: any) => {

  const _startPress = () => {
    navigation.navigate(CHALLENGE_WORKOUT)
  };

  const _backPress = () => {
    navigation.goBack();
  };

  const _challengesWorkOutRender = ({ item, index }: any) => {
    return (
      <AFChallengesWorkout
        img={item.image}
        titleName={item.workOutName}
        startOnPress={_startPress}
      />
    );
  };

  return (
    <>
    <AFSafeAreView />
      <AFBackButton title={STRINGS.homeScreen.challenge} onPress={_backPress}/>
      <View style={styles.container}>
        <FlatList
          data={ChallengesData}
          renderItem={_challengesWorkOutRender}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default AllChallenges;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.white,
  },
  columnWrapper: {
    justifyContent: "space-between",
    flex: 1,
  },
});
