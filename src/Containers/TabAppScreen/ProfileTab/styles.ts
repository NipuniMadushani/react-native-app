import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";
import { fontPixel, getHeightBasedDimension, getWidthBasedDimension } from "../../../Utils/Responsive/Responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  premiumBox: {
    backgroundColor: theme.colors.lime_green,
    alignSelf: 'flex-end',
    marginRight: 15,
    marginVertical: 15,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  profileFlexView: {
    flex: 0.4,
    paddingHorizontal: 15,
    marginTop: getHeightBasedDimension() / -20,
  },
  profileContainer: {
    backgroundColor: theme.colors.Rich_Black,
    marginVertical: 15,
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    top: getHeightBasedDimension() / 25,
    borderRadius: 10,
    paddingTop: getHeightBasedDimension() / 14,
    paddingBottom: 13,
  },
  img: {
    height: getHeightBasedDimension() / 9.2,
    width: getHeightBasedDimension() / 9.2,
  },
  profileImgView: {
    position: "absolute",
    // top: -10,
    alignSelf: "center",
    zIndex: 999,
    // marginTop: 10,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  editView: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: theme.colors.Rich_Black,
  },
  infoFlexView: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  titleText: {
    fontSize: fontPixel(13),
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: getWidthBasedDimension() / 11,
  },
  btn: {
    width: getWidthBasedDimension() / 3,
    marginBottom: 0,
    marginTop: 20,
  },
});
