import React from "react";
import { View, Text, StyleSheet , FlatList} from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS from "../../../Utils/Constants/String";
import { PlanWorkOut } from "../../../Utils/Constants/String";
import AFWorkOutPlan from "../../../Components/AFWorkOutPlan";
import { theme } from "../../../Theme/Theme";
import { CHALLENGE_WORKOUT } from "../../../Navigator/HomeNavigator/HomeNavigator";

const AllPlanWorkout = ({ navigation }: any) => {

  const _backPress = () => {
    navigation.goBack();
  };

  const _workOutItemPress = () => {
    navigation.navigate(CHALLENGE_WORKOUT);
  };


  const _workOutPlanRender = ({ item, index }: any) => {
    return (
      <AFWorkOutPlan
        imgSource={item.img}
        workoutName={item.workOurName}
        workoutCount={item.count}
        workoutMin={item.min}
        onPress={_workOutItemPress}
      />
    );
  };

  return (
    <>
      <AFSafeAreView />
      <AFBackButton
        title={STRINGS.workOut.workOut}
        onPress={_backPress}
      />
      <View style={styles.container}>
        <View>
          <FlatList data={PlanWorkOut} renderItem={_workOutPlanRender} />
        </View>
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default AllPlanWorkout;

export const styles = StyleSheet.create({
    container : {
        backgroundColor: theme.colors.white,
        flex:1,
        paddingHorizontal: 15,
    }
});
