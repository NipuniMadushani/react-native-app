import React from "react";
import { View, StyleSheet } from "react-native";
import { theme, Text } from "../../Theme/Theme";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { fontPixel } from "../../Utils/Responsive/Responsive";

interface AFTrackBoxProps {
  fill: number;
  type: string;
  title: string;
  time: string;
}

const AFTrackerBox: React.FC<AFTrackBoxProps> = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={{ flex:0.6,}}>
        <AnimatedCircularProgress
          size={63}
          width={6}
          fill={props.fill}
          tintColor={theme.colors.lime_green}
          // onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor={theme.colors.lime_green}
          lineCap={"round"}
          backgroundWidth={1}
        >
          {/* {(fill) => <Text style={{ color: "white" }}>{props.fill}</Text>} */}
          {(fill) => (
            <View style={{ alignSelf: "center" }}>
              <Text
                variant="inter_Medium_12"
                color="white"
                textAlign="center"
                fontSize={fontPixel(13.9)}
              >
                {props.fill}
              </Text>
              <Text
                variant="inter_Medium_12"
                color="white"
                textAlign="center"
                fontSize={fontPixel(9)}
                style={{ marginTop: -5 }}
              >
                {props.type}
              </Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>

      <View style={styles.textContainer}>
        <Text
          variant="inter_Medium_12"
          color="white"
          textAlign="center"
          fontSize={fontPixel(12.3)}
          style={{ marginTop: -5 }}
        >
          {props.title}
        </Text>
        <Text
          variant="Inter_Regular_12"
          color="white"
          textAlign="center"
          fontSize={fontPixel(8.6)}
          style={{ marginTop: 2 }}
        >
          {props.time}
        </Text>
      </View>
    </View>
  );
};

export default AFTrackerBox;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Rich_Black,
    paddingVertical: 7,
    width: "48.5%",
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
