import { StyleSheet } from "react-native";
import {
  fontPixel,
  getHeightBasedDimension,
  getWidthBasedDimension,
} from "../../../Utils/Responsive/Responsive";
import { Inter_Medium, Inter_SemiBold, theme } from "../../../Theme/Theme";

export const styles = StyleSheet.create({
  otpContainer: {
    justifyContent: "space-around",
    color: "white",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  roundedTextInput: {
    borderRadius: 10,
    height: getHeightBasedDimension() / 16,
    width: getWidthBasedDimension() / 8,
    borderColor: theme.colors.lime_green,
    borderWidth: 1,
    backgroundColor: theme.colors.Pale_Lime_Green,
    textAlign: "center",
    fontSize: fontPixel(15),
    color: theme.colors.Rich_Black,
    fontFamily: Inter_SemiBold,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
