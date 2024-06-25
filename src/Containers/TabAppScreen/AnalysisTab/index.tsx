import React, { useState } from "react";
import { View, FlatList, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AFTrackerBox from "../../../Components/AFHomeTrackerBox";
import STRINGS from "../../../Utils/Constants/String";
import AFSeeAllTitle from "../../../Components/AFSellAllTitle";
import { TrainingData } from "../../../Utils/Constants/String";
import AFTrainingView from "../../../Components/AFTrainingView";
import { TODAY_TRAINING } from "../../../Navigator/HomeNavigator/HomeNavigator";
import { theme, Text } from "../../../Theme/Theme";
import { Calendar } from "react-native-calendars";
import { calendarTheme, ChartConfig } from "../../../Helper/CalenderTheme";
import AFTabBarVIew from "../../../Components/AFTabBarView";
import SVG from "../../../Utils/Assets/Svg";
import AFChart from "../../../Components/AFChart";
import AfModal from "../../../Components/AFModal";
import AFRulerPicker from "../../../Components/AFRulerPicker";

const AnalysisTab = ({ navigation }: any) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  const _trainingOnPress = () => {
    navigation.navigate(TODAY_TRAINING);
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

  const _weightHandleValue = (value: any) => {
    // setHeightValue(value);
  };

  const _toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <>
      <ScrollView style={styles.container}>
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

        <AFSeeAllTitle title={STRINGS.analysis.calender} />
        <View>
          <Calendar
            onDayPress={onDayPress}
            style={styles.calenderContainer}
            theme={calendarTheme}
            enableSwipeMonths={false}
            hideExtraDays={true}
            markedDates={{
              [selectedDate]: {
                selected: true,
                marked: true,
                selectedColor: theme.colors.lime_green,
                dotColor: theme.colors.white,
              },
            }}
          />
        </View>

        <AFSeeAllTitle title={STRINGS.analysis.historyWorkout} />
        <View>
          <FlatList
            data={TrainingData}
            renderItem={_trainingRender}
            horizontal
          />
        </View>

        <View style={styles.flexWeightView}>
          <View style={styles.weightView}>
            <AFSeeAllTitle title={`${STRINGS.analysis.weight}${"(kg)"}`} />
          </View>
          <TouchableOpacity style={styles.plusView} onPress={_toggleModal}>
            <SVG.PLUS />
          </TouchableOpacity>
        </View>
        <AFChart yAxixsLabel={'Weight(kg)'} xAxixsLabel={'Day'}/>

        <AFSeeAllTitle title={STRINGS.analysis.calorieBurn} />
        <View style={{ height: 10 }}></View>
        <AFChart yAxixsLabel={'Calories(kcal)'} xAxixsLabel={'Day'}/>
        <View style={styles.spaceHeight}></View>
      </ScrollView>
      <AFTabBarVIew />
      <AfModal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        otherModalContent={{ alignItems: "center" , paddingBottom : 0  }}
        modalContent={
          <>
            <AFRulerPicker
              max={50}
              initialValue={21}
              // unit={""}
              onValueChange={_weightHandleValue}
              pickerTitle={STRINGS.analysis.weightKg}
              step={1}
              fractionDigits={0}
            />
          </>
        }
      />
    </>
  );
};

export default AnalysisTab;

