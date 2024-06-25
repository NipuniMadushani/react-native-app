import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { theme, Text } from "../../Theme/Theme";

interface AFTitleValueBoxProps {
  title: string;
  pickerTitle: string;
  unit: string;
  number: any;
  modalView: boolean;
  min: boolean;
  _openPressModal: () => void;
}

const AFTitleValueBox: React.FC<AFTitleValueBoxProps> = (props) => {
  return (
    <>
      <TouchableOpacity
        onPress={props._openPressModal}
        style={styles.touchbleView}
      >
        <View style={styles.flexOne}>
          <Text
            variant="Inter_Regular_12"
            style={{ color: theme.colors.Cool_Gray }}
          >
            {props.title}
          </Text>
        </View>
        <View style={styles.unitFlexView}>
          <Text
            variant="inter_Medium_12"
            textAlign="right"
            style={{ color: theme.colors.Rich_Black }}
          >
            {props.number}
          </Text>
          {props.unit && <Text
            variant="inter_Medium_12"
            textAlign="right"
            style={{ color: theme.colors.Rich_Black , paddingLeft: 5, }}
          >
            {props.unit}
          </Text>}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default AFTitleValueBox;

export const styles = StyleSheet.create({
  touchbleView: {
    height: 45,
    width: "100%",
    marginTop: 20,
    borderColor: theme.colors.lime_green,
    backgroundColor: theme.colors.Pale_Lime_Green,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 13,
    flexDirection: "row",
  },
  text: {
    color: theme.colors.Rich_Black,
  },
  flexOne: {
    flex: 1,
    justifyContent: "center",
  },
  unitFlexView: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
