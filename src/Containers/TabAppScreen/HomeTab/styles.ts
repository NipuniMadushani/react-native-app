import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";
import { isAndroid } from "../../../Helper/VersionCheck";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  backImgView: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: isAndroid() ? 0.7 : 0.9,
  },
  spaceView: {
    paddingHorizontal: 15,
  },
  userNameFlexView: {
    paddingVertical: isAndroid() ? 15 : 10,
    flexDirection: "row",
  },
  nameView: {
    flex: 1,
    justifyContent: "center",
  },
  trackFlexView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 10,
  },
  fitnessBanner: {
    width: "100%",
    resizeMode: "stretch",
    borderRadius: 10,
  },
  bannerView: {
    justifyContent: "center",
    alignItems: "center",
  },
  columnWrapper: {
    justifyContent: "space-between",
    flex: 1,
  },
});
