import { StyleSheet } from "react-native";
import { isAndroid, isIOS } from "../../../Helper/VersionCheck";
import { theme } from "../../../Theme/Theme";
import { fontPixel } from "../../../Utils/Responsive/Responsive";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  titleView: {
    backgroundColor: theme.colors.white,
    paddingVertical: isAndroid() ? 10 : 5,
  },
  indicator: {
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },
  googlePayView: {
    backgroundColor: theme.colors.white,
    paddingBottom: isAndroid() ? 10 : 0,
    fontSize: fontPixel(10),
    marginTop: isIOS()  ? 10 : -10,
  },
  googlePayText: {
    fontSize: fontPixel(10),
  },
  renderContainer: {
    paddingHorizontal: 20,
  },
  titleRenderView: {
    paddingTop: 15,
    paddingBottom: 10,
  },
  boxView: {
    backgroundColor: theme.colors.Pale_Lime_Green,
    borderColor: theme.colors.lime_green,
    borderWidth: 1,
    borderRadius: 15,
    paddingBottom: 15,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  monthText: {
    fontSize: fontPixel(13.8),
    paddingBottom: 10,
  },
  loremFlexView: {
    flexDirection: "row",
    marginBottom: 5,
  },
  loremTextView: {
    flex: 1,
    paddingLeft: 10,
  },
  loremText: {
    fontSize: fontPixel(11),
    color: theme.colors.Cool_Gray,
  },
  renderButtonView: {
    width: "50%",
    marginBottom: 0,
  },
});
