import React from "react";
import { View, StyleSheet } from "react-native";
import { RulerPicker } from "react-native-ruler-picker";
import { theme } from "../../Theme/Theme";
import { fontPixel, getWidthBasedDimension } from "../../Utils/Responsive/Responsive";
import { Text } from "../../Theme/Theme";

interface RulerProps {
  max: any;
  fractionDigits: any;
  onValueChange: () => void;
  unit : string;
  initialValue : any;
  step : any;
}

const AFRulerPicker:React.FC<RulerProps> = (props: any) => {
  return (
    <View>
      <Text
        variant="Inter_Regular_12"
        color="white"
        textAlign="center"
        style={styles.pickerTitle}
      >
        {props.pickerTitle}
      </Text>
      <View style={{height: 20,}}></View>
      <RulerPicker
        min={props.step}
        max={props.max}
        width={getWidthBasedDimension()/ 1.2}
        step={props.step}
        fractionDigits={props.fractionDigits}
        initialValue={props.initialValue}
        onValueChange={props.onValueChange}
        unit={""}
        longStepColor={theme.colors.lime_green}
        shortStepColor={theme.colors.lime_green}
        indicatorColor={theme.colors.white}
        height={150}
        unitTextStyle={styles.unitTextStyle}
        valueTextStyle={styles.valueTextStyle}
      />
    </View>
  );
};

export default AFRulerPicker;

export const styles = StyleSheet.create({
  unitTextStyle: {
    fontSize: fontPixel(13),
    color: theme.colors.lime_green,
  },
  valueTextStyle: {
    fontSize: fontPixel(20),
    color: theme.colors.lime_green,
  },
  pickerTitle: {
    fontSize: fontPixel(13),
    color: theme.colors.white,
    paddingBottom: 10,
  },
});
