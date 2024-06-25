import { StyleSheet } from "react-native";
import { fontPixel, getHeightBasedDimension } from "../../../Utils/Responsive/Responsive";
import { Inter_Medium, Inter_Regular, theme } from "../../../Theme/Theme";

export const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: getHeightBasedDimension() / 3.3,
  },
  backPositionView: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
  },
  likeView: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
  },
  playPausesView: {
    backgroundColor: theme.colors.white,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    position: "absolute",
    alignSelf: "center",
    marginTop: getHeightBasedDimension() / 8,
  },
  calView: {
    bottom: -25,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    zIndex: 9,
  },
  imgBack: {
    height: getHeightBasedDimension() / 3.3,
  },
  scrollcontainer: {
    marginTop: getHeightBasedDimension() / 20,
    paddingHorizontal: 15,
  },
  inputView: {
    backgroundColor: theme.colors.Pale_Lime_Green,
    height : getHeightBasedDimension() / 6,
    borderRadius : 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontFamily: Inter_Regular,
    fontSize: fontPixel(12),
    color: theme.colors.Cool_Gray,
    lineHeight: 25,
  },
  noteView: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  }
});
