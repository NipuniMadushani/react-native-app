import React from "react";
import { View,  StyleSheet, ViewStyle } from "react-native";
import { theme , Text} from "../../Theme/Theme";
import { getHeightBasedDimension } from "../../Utils/Responsive/Responsive";
import SVG from "../../Utils/Assets/Svg";
import { fontPixel } from "../../Utils/Responsive/Responsive";
import STRINGS from "../../Utils/Constants/String";
import { isAndroid } from "../../Helper/VersionCheck";

interface AFCalBurnProps {
  otherStyle : ViewStyle;
}

const AFTimeBurnView:React.FC<AFCalBurnProps> = (props : any)  => {
  return (
    <View style={[styles.positionRoundView , {...props.otherStyle}]}>
      <View style={styles.flexView}>
        <View style={styles.iconView}>
          <SVG.TIME />
        </View>
        <View style={styles.textFlexView}>
          <Text variant="Inter_Regular_12" color="Cool_Gray" style={{ fontSize: fontPixel(10) }} >
            {STRINGS.videoScreen.time}
          </Text>
          <Text variant="inter_Medium_12" color="Rich_Black" style={{ marginTop: isAndroid() ? -4  : 0}} >
            {"10 min"}
          </Text>
        </View>
      </View>

      <View style={styles.flexView}>
        <View style={styles.iconView}>
          <SVG.BURN />
        </View>
        <View style={styles.textFlexView}>
          <Text variant="Inter_Regular_12"  color="Cool_Gray" style={{ fontSize: fontPixel(10) }} >
            {STRINGS.videoScreen.burn}
          </Text>
          <Text  variant="inter_Medium_12"  color="Rich_Black"  style={{ marginTop: isAndroid() ? -4  : 0}} >
            {"20 kcal"}
          </Text>
        </View>
      </View>
    </View>
  ); 
};

export default AFTimeBurnView;

export const styles = StyleSheet.create({
  positionRoundView: {
    backgroundColor: theme.colors.white,
    paddingVertical: 8,
    borderRadius: 50,
    position: "absolute",
    alignSelf: "center",
    width: "53%",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    shadowColor: "rgba(0,0,0,0.7)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 999,
  },
  flexView: {
    flexDirection: "row",
  },
  textFlexView: {
    paddingLeft: 10,
    justifyContent: "center",
  },
  iconView: {
    alignSelf: "center",
  },
});
