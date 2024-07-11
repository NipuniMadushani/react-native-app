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
import { CHALLENGE_VIDEO } from "../../../Navigator/HomeNavigator/HomeNavigator";
import AFSeeAllTitle from "../../../Components/AFSellAllTitle";
import { stylesVC } from "./stylesVC";
import { getById} from "../../../Api/Apis";
import { REACT_APP_MOBILE_APP_URL, REACT_APP_TRANSPORT_MODULE_URL } from "@env";
import { useRoute } from '@react-navigation/native';
import { TrainingItem } from "./TraningItem";

const LogSheet = ({ navigation }: any) => {
  const [like, setLike] = useState(false);
  const [modifiedData, setModifiedData] = useState<[]>([]);

  const route = useRoute();
  const { date } = route.params;
  // const [selectedDate, setSelectedDate] = useState("");
  const [selectedDate, setSelectedDate] = useState<string[]>([]);
  // const markedDates: any = {};
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
  const [data, setData] = useState(null);

console.warn("dateL:"+date);
  useEffect(() => {
    console.log('Received date:', route?.params);
    // You can now use the date for fetching or displaying data
  }, []);
  const _backPress = () => {
    navigation.goBack();
  };

  const _exePress = () => {
    navigation.navigate(CHALLENGE_VIDEO);
  };

  const _toggleLikePress = () => {
    setLike(!like);
  };
  const [expandedId, setExpandedId] = useState(null);

  const handlePress = (id:any) => {
    setExpandedId(expandedId === id ? null : id);
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
    // setSelectedDate(day.dateString);
  };

  useEffect(() => {
    console.warn(selectedDate);
  
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
      const url = `${process.env.REACT_APP_TRANSPORT_MODULE_URL}/TransportMobile/logSheetDetails/${date}`;

      try {
        const result = await getById(url);
        // console.log('Fetched data:', result);

        // let allDates = new Set<string>();
        const data = result?.data?.payload[0] // Directly access payload
        // // const dateObjectsArray = uniqueDatesArray.map(dateString => new Date(dateString)); // Convert strings to Date objects
        console.log('All dates in between:', data);
        console.log('locations:', data[0]);

        const modifiedData = data?.map((item: { vehicleAllocations: { logSheetNoRefNo: any; }; }, index: number) => {
          return {
              id: index + 1, // Assuming each item should have a unique id based on its position
              name: item?.vehicleAllocations?.logSheetNoRefNo,
              min: "10 min", // Placeholder value for `min`
              focus: "focus" // Placeholder value for `focus`
          };
      });
        setModifiedData(modifiedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <>
      <AFSafeAreView />
     
      <AFTopImgView
        icon={like ? <SVG.HEART /> : <SVG.HEART_OUTLINE />}
        opPress={_toggleLikePress}
        backOnPress={_backPress}
        title={"Log Sheet"}
        exe
     
        exeTitle={date}
      />
      
        <View style={stylesVC.container}> 
        <AFSeeAllTitle title={STRINGS.analysis.calender} />
        <View style={styles.container}>
        <View style={{ height: 15 }}></View>
        {/* <AFProfileNameBox /> */}
        <FlatList
         data={modifiedData}
        //  renderItem={renderItem}
        //  keyExtractor={(item) => item.id.toString()}
          // data={TodayTrainingData}
          renderItem={_todayTrainingData}
          // keyExtractor={(item) => item.id.toString()}
        />
      </View>
        </View>
     
      <AFBottomSafeAreView />
    </>
  );
};

export default LogSheet;

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
