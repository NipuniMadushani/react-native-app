import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";
import {
  fontPixel,
  getHeightBasedDimension,
  getWidthBasedDimension,
} from "../../../Utils/Responsive/Responsive";
import { isAndroid } from "../../../Helper/VersionCheck";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  boxView: {
    height: isAndroid() ?  getHeightBasedDimension() / 2.3 :  getHeightBasedDimension() / 2.6,
    width: "100%",
    backgroundColor: theme.colors.Pale_Lime_Green,
    borderRadius: 15,
    padding: 15,
  },
  afBoxFlexView: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  workOutView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  workOutTitleText: {
    fontSize: fontPixel(20),
  },
  workOutNameView: {
    marginVertical: 20,
  },
  timeText: {
    fontSize: fontPixel(25),
  },
  progressBarView: {
    alignSelf: "center",
    marginTop: 15,
    backgroundColor: theme.colors.Cool_Gray,
    width: '60%',
    height: 46,
    borderRadius: 100,
  },
  skipflexView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: getWidthBasedDimension() / 8,
    marginTop: getHeightBasedDimension() / 8,
  },
  arrowView: {
    alignSelf: "center",
  },
  flexView: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: theme.colors.lime_green,
    height: 46,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  playFlexView: {
    flexDirection: 'row',
    marginLeft: getWidthBasedDimension() / 5,
    flex:1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 999,
  }
});
