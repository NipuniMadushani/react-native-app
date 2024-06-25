import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import { Text } from "../../../Theme/Theme";
import STRINGS from "../../../Utils/Constants/String";
import Assets from "../../../Utils/Assets/Assets";
import AFTabBarVIew from "../../../Components/AFTabBarView";
import moment from "moment";

const GpsTab = () => {
  const [isCounting, setIsCounting] = useState(false);
  const [kilometers, setKilometers] = useState(0);
  const [calories, setCalories] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const weight = 70;
  const MET = 3.5; 

  // Effect to handle interval
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCounting) {
      console.log("isCounting", isCounting);

      // Setting up interval to update kilometers and calories every second
      interval = setInterval(() => {
        // const caloriesBurnedPerSecond = MET * weight * (1 / 3600); // Calories burned per second

        setKilometers((prev) => prev + 0.1); // Simulating kilometer increment
        setCalories((prev) => prev + 5); // Simulating calorie increment
        // setCalories((prev) => prev + caloriesBurnedPerSecond);
        setElapsedTime((prev) => prev + 1); // Incrementing elapsed time by 1 second
      }, 1000); // Update every second
    } else if (!isCounting && kilometers !== 0) {
      clearInterval(interval); // Clearing interval when counting stops
    }

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(interval);
  }, [isCounting, kilometers]);

  // Function to handle start/stop button press
  const _startPress = () => {
    setIsCounting((prev) => !prev); // Toggle counting stat
  };


  const formatTime = (seconds : any) => {
    return moment.utc(seconds * 1000).format('HH:mm:ss');
  };

  return (
    <>
      <AFSafeAreView />
      <View style={styles.titleView}>
        <Text variant="inter_SemiBold_17" color="Rich_Black" textAlign="center">
          {STRINGS.location.title}
        </Text>
      </View>

      <View style={styles.container}>
        <Image source={Assets.Map} style={styles.map} />

        <TouchableOpacity style={styles.roundView} onPress={_startPress}>
          <Text variant="inter_Medium_15" color="white" textAlign="center" style={styles.countTitleText}>
            {isCounting ? formatTime(elapsedTime) : STRINGS.location.start}
          </Text>
        </TouchableOpacity>

        <View style={styles.flexPositionView}>
          <View style={styles.blackBox}>
            <Text
              variant="inter_Medium_15"
              color="lime_green"
              textAlign="center"
              style={styles.countTitleText}
            >
              {STRINGS.location.kilometer}
            </Text>
            <Text
              variant="inter_SemiBold_17"
              color="lime_green"
              textAlign="center"
              style={styles.countText}
            >
              {kilometers?.toFixed(2)}
            </Text>
          </View>

          <View style={styles.blackBox}>
            <Text
              variant="inter_Medium_15"
              color="lime_green"
              textAlign="center"
              style={styles.countTitleText}
            >
              {STRINGS.location.calorie}
            </Text>
            <Text
              variant="inter_SemiBold_17"
              color="lime_green"
              textAlign="center"
              style={styles.countText}
            >
              {calories?.toFixed(0)}
            </Text>
          </View>
        </View>
      </View>
      <AFTabBarVIew />
      <AFBottomSafeAreView />
    </>
  );
};

export default GpsTab;
