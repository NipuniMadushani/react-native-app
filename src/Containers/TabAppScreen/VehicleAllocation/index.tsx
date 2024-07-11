import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFTopImgView from "../../../Components/AFTopImgView";
import SVG from "../../../Utils/Assets/Svg";
import STRINGS from "../../../Utils/Constants/String";
import AFProfileNameBox from "../../../Components/AFProfileNameBox";
import { TodayTrainingData } from "../../../Utils/Constants/String";
import { theme } from "../../../Theme/Theme";
import { CHALLENGE_VIDEO, LOG_SHEET } from "../../../Navigator/HomeNavigator/HomeNavigator";
import AFSeeAllTitle from "../../../Components/AFSellAllTitle";
import { Calendar } from "react-native-calendars";
import { stylesVC } from "./stylesVC";
import { calendarTheme, ChartConfig } from "../../../Helper/CalenderTheme";
import { getById} from "../../../Api/Apis";
import { REACT_APP_MOBILE_APP_URL, REACT_APP_TRANSPORT_MODULE_URL } from "@env";
const VehilceAllocation = ({ navigation }: any) => {
  const [like, setLike] = useState(false);
  
  const [selectedDate, setSelectedDate] = useState<string[]>([]);
 
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});


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

  const onDayPress = (day: any) => {
    console.warn(day.dateString)
    navigation.navigate('LogSheet', { date: day.dateString });
    // navigation.navigate(LOG_SHEET);
    // setSelectedDate(day.dateString);
  };

  useEffect(() => {
 
    const newMarkedDates: { [key: string]: any } = {};
  
    selectedDate.forEach(date => {
      newMarkedDates[date] = {
        selected: true,
        marked: true,
        selectedColor: theme.colors.lime_green,
        dotColor: theme.colors.white,
      };
    });
  
    setMarkedDates(newMarkedDates);
  }, [selectedDate])
  

  useEffect(() => {
    const fetchData = async () => {
      console.log("1");
      const workerId = 1; // Replace with the appropriate worker ID
      const url = `${process.env.REACT_APP_TRANSPORT_MODULE_URL}/vehicleAllocation/getLogSheetDetailsByWorkerId/${workerId}`;

      try {
        const result = await getById(url);
        // console.log('Fetched data:', result?.data?.payload[0]);

        let allDates = new Set<string>();
        const data = result?.data?.payload[0]; // Directly access payload

        data.forEach((pair: [string, string]) => {
          const [fromDate, toDate] = pair;
          const datesBetween = getDatesBetween(fromDate, toDate);
          console.log(datesBetween);
          // console.log(`Dates between ${fromDate} and ${toDate}:`, datesBetween); // Add debug log
          datesBetween.forEach(date => allDates.add(date)); // Add to the set to ensure uniqueness
        });

        const uniqueDatesArray = Array.from(allDates).sort(); // Sort the dates to ensure order
        // const dateObjectsArray = uniqueDatesArray.map(dateString => new Date(dateString)); // Convert strings to Date objects
        setSelectedDate(uniqueDatesArray);
        // console.log('All dates in between:', uniqueDatesArray);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to get all dates in between two dates, including the start and end dates
  function getDatesBetween(startDate: string | number | Date, endDate: string | number | Date) {
    let dates = [];
    let currentDate = new Date(startDate);
    // console.warn("cd:"+currentDate)
    const end = new Date(endDate);


    while (currentDate <= end) {
      console.warn(currentDate);
      dates.push(new Date(currentDate).toISOString().split('T')[0]); // Get only the date part
      currentDate.setDate(currentDate.getDate() + 1);
    }
    dates.push(new Date(endDate).toISOString().split('T')[0])
    return dates;
  }

  return (
    <>
      <AFSafeAreView />
      <AFTopImgView
        icon={like ? <SVG.HEART /> : <SVG.HEART />}
        opPress={_toggleLikePress}
        backOnPress={_backPress}
        title={"Vehicle Allocation"}
        exe
     
        // exeTitle={"5 Exercises"}
      />
      
        <View style={stylesVC.container}> 
        <AFSeeAllTitle title={STRINGS.analysis.calenderDates} />
          <Calendar
            onDayPress={onDayPress}
            style={stylesVC.calenderContainer}
            theme={calendarTheme}
            enableSwipeMonths={false}
            hideExtraDays={true}
            markedDates={markedDates}
            // markedDates={{
            //   [selectedDate]: {
            //     selected: true,
            //     marked: true,
            //     selectedColor: theme.colors.lime_green,
            //     dotColor: theme.colors.white,
            //   },
            // }}
          />
        </View>
      {/* <Text>Vehicle Allocation</Text> */}
      {/* <View style={styles.container}>
        <View style={{ height: 15 }}></View>
        {/* <AFProfileNameBox /> */}
        {/* <FlatList
          data={TodayTrainingData}
          renderItem={_todayTrainingData}
          keyExtractor={(item) => item.id.toString()}
        /> */}
      {/* </View> */} 
      <AFBottomSafeAreView />
    </>
  );
};

export default VehilceAllocation;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  topImgView: {
    height: 100, // Set your desired height here
  },
});
