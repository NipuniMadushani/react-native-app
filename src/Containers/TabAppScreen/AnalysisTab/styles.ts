import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";
import { fontPixel, getHeightBasedDimension } from "../../../Utils/Responsive/Responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  trackFlexView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 10,
  },
  calenderContainer: {
    borderRadius: 18,
    backgroundColor: theme.colors.Rich_Black,
    paddingBottom: 5,
    marginVertical: 10,
  },
  headerView: {
    backgroundColor: theme.colors.Rich_Black,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: fontPixel(14),
  },
  flexWeightView: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  plusView: {
    height: 29,
    width: 29,
    backgroundColor: theme.colors.lime_green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  weightView: {
    flex: 1,
    justifyContent: "center",
  },
  spaceHeight: {
    height: getHeightBasedDimension() / 30
  }
});
