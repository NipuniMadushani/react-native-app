import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { theme, Text } from "../../Theme/Theme";
import { fontPixel } from "../../Utils/Responsive/Responsive";
import SVG from "../../Utils/Assets/Svg";


interface AFPremiumProps { 
  onPress: () => void;
}

const AFPremium:React.FC<AFPremiumProps> = (props) => {
  return (
    <View style={styles.premiumView} >
      <View style={styles.proFlexView}>
        <View style={styles.proView}>
          <Text variant="Inter_Regular_12" color="Rich_Black" textAlign="center">
            {"PRO"}
          </Text>
        </View>
        <View style={styles.upgradeView}>
          <Text  variant="inter_Medium_12"  color="white" textAlign="left" style={{ fontSize: fontPixel(12.5) }} >
            {"Upgrade to premium"}
          </Text>
        </View>
        <TouchableOpacity style={styles.nextView} onPress={props.onPress}>
          <SVG.NEXT_ARROW />
        </TouchableOpacity>
      </View>

      <View style={styles.contentView}>
        <Text  variant="inter_Medium_12"  color="white"  textAlign="center"  style={{ fontSize: fontPixel(10) }} >
          {"Enjoy workout access without ads and restrictions."}
        </Text>
      </View>
    </View>
  );
};

export default AFPremium;

export const styles = StyleSheet.create({
  premiumView: {
    paddingVertical: 15,
    backgroundColor: theme.colors.lime_green,
    width: "85%",
    alignSelf: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  proView: {
    backgroundColor: theme.colors.Golden_yellow,
    paddingHorizontal: 15,
    borderRadius: 50,
    justifyContent: 'center',
  },
  proFlexView: {
    flexDirection: "row",
  },
  upgradeView: {
    justifyContent: "center",
    paddingHorizontal: 15,
    flex: 1,
  },
  nextView: {
    backgroundColor: theme.colors.Rich_Black,
    height: 25,
    width: 26,
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  contentView: {
    paddingTop: 10,
    width: "100%",
  },
});
