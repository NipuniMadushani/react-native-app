import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { theme, Text } from "../../Theme/Theme";
import {
  fontPixel,
  getWidthBasedDimension,
} from "../../Utils/Responsive/Responsive";
import AFButton from "../AFButton";

interface AFChallengesProps {
  img: any;
  titleName: string;
  startOnPress: () => void;
}

const AFChallengesWorkout: React.FC<AFChallengesProps> = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={props.img} />
      </View>
      <View>
        <Text variant="Inter_Regular_12" color="white" textAlign="left">
          {props.titleName}
        </Text>
      </View>
      <View>
        <AFButton
          otherStyle={styles.btnView}
          transparent
          buttonTitle={"Start"}
          onPress={props.startOnPress}
        />
      </View>
    </View>
  );
};

export default AFChallengesWorkout;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Rich_Black,
    width: getWidthBasedDimension() / 3.5,
    // height: getWidthBasedDimension() / 3.5,
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:  7,
  },
  imgView: {
    height: getWidthBasedDimension() / 7,
    justifyContent: "center",
    alignItems: "center",
  },
  btnView: {
    width: getWidthBasedDimension() / 5,
    marginBottom: 0,
    marginTop: 5,
    height: 28,
  },
});
