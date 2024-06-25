import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageProps, Image } from "react-native";
import { Text, theme } from "../../Theme/Theme";
import { fontPixel } from "../../Utils/Responsive/Responsive";

interface AFrainingViewProps {
  onPress: () => void;
  isLastItem: string;
  workOutName: string;
  workout: string;
  min: string;
  imageSource: ImageProps;
}

const AFTrainingView: React.FC<AFrainingViewProps> = (props: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.trainingRenderView,
        { marginRight: props.isLastItem ? 0 : 13 },
      ]}
      onPress={props.onPress}
    >
      <View>
        <Image source={props.imageSource} style={styles.img} />
        <View style={{ position: "absolute", top: 10, left: 10 }}>
          <Text
            variant="inter_Medium_12"
            color="white"
            textAlign="left"
            fontSize={fontPixel(12.8)}
          >
            {props.workOutName}
          </Text>
          <Text
            variant="Inter_Regular_12"
            color="white"
            textAlign="left"
            fontSize={fontPixel(9.6)}
          >
            {props.workout}
          </Text>
        </View>
        <View style={{ position: "absolute", bottom: 10, right: 10 }}>
          <Text
            variant="Inter_Regular_12"
            color="white"
            textAlign="left"
            fontSize={fontPixel(9.6)}
          >
            {props.min}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AFTrainingView;

export const styles = StyleSheet.create({
  trainingRenderView: {
    marginVertical: 10,
  },
  img: {
    height: 121,
    width: 187,
    backgroundColor: theme.colors.Cool_Gray,
    borderRadius: 10,
  },
});
