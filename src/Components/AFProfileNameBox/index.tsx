import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, theme } from "../../Theme/Theme";
import { fontPixel } from "../../Utils/Responsive/Responsive";

interface AFProfileNameProps {
  nameTitle: string;
  subTitle: string;
  focus: string;
  onPress : () => void;
}

const AFProfileNameBox: React.FC<AFProfileNameProps> = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.nameFlexView}>
        {props.focus ? (
          <Text variant="inter_Medium_12" color="Cool_Gray" textAlign="left">
            {props.nameTitle}
          </Text>
        ) : (
          <Text variant="inter_Medium_12" color="Rich_Black" textAlign="left">
            {props.nameTitle}
          </Text>
        )}
      </View>
      <View style={{ justifyContent: "center" }}>
      {props.focus ? (
          <Text variant="inter_Medium_12" color="Cool_Gray" textAlign="left" fontSize={fontPixel(10)}>
            {props.subTitle}
          </Text>
        ) : (
          <Text variant="inter_Medium_12" color="Rich_Black" textAlign="left" fontSize={fontPixel(10)}>
            {props.subTitle}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AFProfileNameBox;

export const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: theme.colors.Pale_Lime_Green,
    borderColor: theme.colors.lime_green,
    borderWidth: 1,
    marginVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
  },
  nameFlexView: {
    flex: 1,
    justifyContent: "center",
  },
});
