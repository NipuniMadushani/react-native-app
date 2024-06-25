import { StyleSheet } from "react-native";
import { Inter_Medium, theme } from "../../../Theme/Theme";
import {
  fontPixel,
  getHeightBasedDimension,
  getWidthBasedDimension,
} from "../../../Utils/Responsive/Responsive";

export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "pink",
  },
  loginText: {
    color: theme.colors.white,
    fontSize: fontPixel(12),
    fontFamily: Inter_Medium,
  },
  forPass: {
    color: theme.colors.Rich_Black,
    fontSize: fontPixel(11),
    paddingTop: 5,
  },
  bottomView: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  orText: {
    color: theme.colors.Cool_Gray,
  },
  socialView: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 15,
  },
});
