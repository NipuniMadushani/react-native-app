import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";
import {
  fontPixel,
  getHeightBasedDimension,
} from "../../../Utils/Responsive/Responsive";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  renderView: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  renderImg: {
    width: "100%",
    resizeMode: "stretch",
    height: getHeightBasedDimension() / 5,
    borderRadius: 15,
  },
  boxView: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  textContainer: {
    backgroundColor: theme.colors.white,
    paddingVertical: 6,
    marginTop: -20,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 8,
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: fontPixel(12.6),
  },
  calBurnFlexView: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 5,
  },
  iconView: {
    paddingRight: 5,
    alignSelf: "center",
  },
  burnIconView: {
    paddingLeft: 10,
  },
  burnText: {
    fontSize: fontPixel(11),
    alignSelf: "center",
  },
});
