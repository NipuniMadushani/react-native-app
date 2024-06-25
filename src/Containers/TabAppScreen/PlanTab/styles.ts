import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";
import {
  fontPixel,
  getHeightBasedDimension,
} from "../../../Utils/Responsive/Responsive";
import { isAndroid } from "../../../Helper/VersionCheck";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  columnWrapper: {
    // justifyContent: "space-between",
    flex:1,
  },
  renderView: {
    marginBottom: 10,
    // width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  couchName: {
    fontSize: fontPixel(10),
    paddingTop: 6,
  },
  imgView: {
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    height: isAndroid()  ? getHeightBasedDimension() / 10.9 : getHeightBasedDimension() / 11.9,
    width: isAndroid()  ? getHeightBasedDimension() / 10.9 : getHeightBasedDimension() / 11.9,
    borderRadius: 100,
  },
  img: {
    // height : getHeightBasedDimension() / 10.9,
    // width : getHeightBasedDimension() / 10.9,
    height: "100%",
    width: "100%",
  },
  lastView: {
    backgroundColor: theme.colors.Pale_Lime_Green,
    justifyContent: "center",
    alignItems: "center",
    height: getHeightBasedDimension() / 10.9,
    width: getHeightBasedDimension() / 10.5,
    borderRadius: 100,
    borderColor: theme.colors.lime_green,
    borderWidth: 1,
  },
});
