import React from "react";
import {  View, StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle, } from "react-native";
import SVG from "../../Utils/Assets/Svg";
import { fontPixel, getHeightBasedDimension } from "../../Utils/Responsive/Responsive";
import { theme, Text } from "../../Theme/Theme";

interface AFArrowButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  seeAllPress: () => void;
  title: string;
  transparent: ViewStyle;
  close: boolean;
  White: boolean;
  seeAll: boolean;
}

const AFBackButton: React.FC<AFArrowButtonProps> = ({  onPress,  ...props }) => {
  return (
    <View style={[ styles.container,  props.transparent && { ...styles.transparent }, ]}>
      <TouchableOpacity  style={styles.arrowContainer} onPress={onPress}  {...props} >
        {props.close ? <SVG.CLOSE /> : <SVG.BACK_WHITE_ARROW />}
      </TouchableOpacity>
      <View style={styles.titleView}>
        {props.close == true ? (
          <Text
            variant="inter_SemiBold_17" 
            color="white"
            textAlign="center"
            style={[styles.textTitle , {marginLeft: -40}]}
          >
            {props.title}
          </Text>
        ) : (
          <Text
            variant="Inter_SemiBold_12"
            color="white"
            style={[styles.textTitle , {color : props.White ? theme.colors.white : theme.colors.Rich_Black , fontSize: fontPixel(15)}]}
          >
            {props.title}
          </Text>
        )}
      </View>
      {props.seeAll === true && (
        <TouchableOpacity onPress={props.seeAllPress} style={{ alignSelf: "center"}}>
          <Text
            variant="Inter_Regular_12"
            color="white"
            textAlign="left"
            fontSize={fontPixel(11)}
            style={styles.textTitle}
          >
            {"See all"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AFBackButton;

export const styles = StyleSheet.create({
  arrowContainer: {
    backgroundColor: theme.colors.lime_green,
    height: 27,
    width: 27.5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  textTitle: {
    color: theme.colors.Rich_Black,
  },
  container: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
    zIndex : 999,
  },
  transparent: {
    backgroundColor: "transparent",
  },
});
