import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getHeightBasedDimension } from "../../Utils/Responsive/Responsive";
import { theme } from "../../Theme/Theme";

const AFTabBarVIew = () => {
  return <View style={styles.container}></View>;
};

export default AFTabBarVIew;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    height: getHeightBasedDimension() / 11,
  },
});
