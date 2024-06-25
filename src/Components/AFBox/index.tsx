import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../Theme/Theme";

interface AFBoxProps {
    icon :  React.ReactNode;
    onPress :  () => void ;
}

const AFBox:React.FC<AFBoxProps> = (props : any) => {
  return (
    <TouchableOpacity style={styles.boxView} onPress={props.onPress}>
      <View>{props.icon}</View>
    </TouchableOpacity>
  );
};

export default AFBox;

export const styles = StyleSheet.create({
  boxView: {
    height: 35,
    width: 37,
    backgroundColor: theme.colors.lime_green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
