import React from "react";
import { View, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { theme } from "../../Theme/Theme";
import { Text } from "../../Theme/Theme";
import {  fontPixel, getHeightBasedDimension, getWidthBasedDimension, } from "../../Utils/Responsive/Responsive";

interface AFWorkoutPlanProps {
  imgSource: ImageSourcePropType;
  workoutName: string;
  workoutCount: string;
  workoutMin: string;
  onPress: () => void;
}

const AFWorkOutPlan: React.FC<AFWorkoutPlanProps> = (props) => {
  return (
    <TouchableOpacity style={styles.renderView} onPress={props.onPress}>
      <View style={styles.imgView}>
        <Image source={props.imgSource} />
      </View>
      <View style={styles.flexTextView}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text variant="Inter_SemiBold_12"  color="Rich_Black"  style={styles.workoutName}>
            {props.workoutName}
          </Text>
          <Text variant="Inter_Regular_12" color="Cool_Gray"   style={styles.countText} >
            {props.workoutCount}
          </Text>
        </View>
        <View style={{marginTop: 10, }}>
          <Text variant="Inter_Regular_12" color="Cool_Gray"  style={styles.countText} >
            {props.workoutMin}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AFWorkOutPlan;

export const styles = StyleSheet.create({
  renderView: {
    // backgroundColor: "red",
    flexDirection: "row",
    marginVertical: 6,
    height: getHeightBasedDimension() / 14.5,
  },
  imgView: {
    backgroundColor: theme.colors.Rich_Black,
    width: getWidthBasedDimension() / 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  flexTextView: {
    flex: 1,
    backgroundColor: theme.colors.Pale_Lime_Green,
    borderRadius: 10,
    borderColor: theme.colors.lime_green,
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  workoutName: {
    // fontSize : fontPixel(12.5),
  },
  countText: {
    fontSize: fontPixel(10),
  },
});
