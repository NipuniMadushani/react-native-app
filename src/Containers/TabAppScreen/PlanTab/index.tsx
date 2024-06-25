import React, {useState} from "react";
import { View, FlatList, TouchableOpacity, Image ,Dimensions, ScrollView } from "react-native";
import { styles } from "./styles";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFTabBarVIew from "../../../Components/AFTabBarView";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS, { PlanCouch } from "../../../Utils/Constants/String";
import { PlanWorkOut } from "../../../Utils/Constants/String";
import AFWorkOutPlan from "../../../Components/AFWorkOutPlan";
import {  ALL_PLAN_WORKOUT, CHALLENGE_WORKOUT, COUCH_PROFILE, } from "../../../Navigator/HomeNavigator/HomeNavigator";
import AFSeeAllTitle from "../../../Components/AFSellAllTitle";
import { Text } from "../../../Theme/Theme";
import SVG from "../../../Utils/Assets/Svg";
import Assets from "../../../Utils/Assets/Assets";
import AFPremium from "../../../Components/AFPremium";
import { SUBSCRIPTION_SCREEN } from "../../../Navigator/AuthenticationNavigator/AuthenticationNavigator";

const PlanTab = ({ navigation }: any) => {
  const [showMoreCouches, setShowMoreCouches] = useState(false);
  // const initialDisplayCount = 5;
  const dataLength = PlanCouch.length;
  const initialDisplayCount = Math.min(dataLength, 5);

  const updatedPlanCouch = [...PlanCouch];
  if (!showMoreCouches) {
    updatedPlanCouch.splice(initialDisplayCount, updatedPlanCouch.length - initialDisplayCount);
    updatedPlanCouch.push({ id: updatedPlanCouch.length + 1, img: Assets.more, name: "More" });
  };

  const screenWidth = Dimensions.get('window').width;
  const numColumns = 4;

  const itemWidth = screenWidth / numColumns - 7;

  const _backPress = () => {
    navigation.goBack();
  };

  const _workOutAllPress = () => {
    navigation.navigate(ALL_PLAN_WORKOUT);
  };

  const _workOutItemPress = () => {
    navigation.navigate(CHALLENGE_WORKOUT);
  };

  const _planCouchPress = (item: any) => {
    if (item.name === "More") {
      setShowMoreCouches(!showMoreCouches);
    } else {
      navigation.navigate(COUCH_PROFILE);
    }
  };

  const _premiumPress = () => {
    navigation.navigate(SUBSCRIPTION_SCREEN);
  };

  const _workOutPlanRender = ({ item, index }: any) => {
    return index < 4 ? (
      <AFWorkOutPlan
        imgSource={item.img}
        workoutName={item.workOurName}
        workoutCount={item.count}
        workoutMin={item.min}
        onPress={_workOutItemPress}
      />
    ) : null;
  };

  const _planCouchRender = ({ item, index }: any) => {

    const isLastItem = item.name === 'More';

    return (
      <TouchableOpacity style={[styles.renderView , {width: itemWidth}]} onPress={() => _planCouchPress(item)}>
        <View style={isLastItem ? styles.lastView : styles.imgView}>
          <Image source={item.img} style={isLastItem ? null : styles.img} />
        </View>

        <Text variant="Inter_SemiBold_12" color="Rich_Black" style={styles.couchName} textAlign="center">
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <AFSafeAreView />
      <AFBackButton title={STRINGS.workOut.workOut} seeAll seeAllPress={_workOutAllPress} onPress={_backPress}/>
      <ScrollView style={styles.container}>
        <View>
          <FlatList data={PlanWorkOut} renderItem={_workOutPlanRender} />
        </View>
        <View style={{ height: 10 }}></View>
        <AFSeeAllTitle title={STRINGS.workOut.accordingPlan} />
        <View style={{ height: 10 }}></View>
        <View>
          <FlatList
            data={updatedPlanCouch}
            renderItem={_planCouchRender}
            numColumns={numColumns}
            columnWrapperStyle={styles.columnWrapper}
          />
        </View>
        <AFPremium onPress={_premiumPress} />
      </ScrollView>
      <AFTabBarVIew />
      <AFBottomSafeAreView />
    </>
  );
};

export default PlanTab;
