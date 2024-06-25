import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";
import { fontPixel, getHeightBasedDimension } from "../../../Utils/Responsive/Responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  titleView: {
    paddingVertical: 10,
    backgroundColor: theme.colors.white,
  },
  map: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
  },
  flexPositionView: {
    position: "absolute",
    height: 100,
    width: "100%",
    bottom: -25,
    paddingHorizontal: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  blackBox: {
    backgroundColor: theme.colors.Rich_Black,
    height: 73,
    width: 95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  roundView: {
    backgroundColor: "#FF5757",
    height: 85,
    borderRadius: 200,
    width: 85,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    bottom: getHeightBasedDimension() / 18,
    alignSelf: 'center',
  },
  countText : {
    fontSize: fontPixel(20),
    marginTop: -5,
  },
  countTitleText : {
    fontSize: fontPixel(14),
  },
});
