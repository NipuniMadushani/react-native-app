import { StyleSheet } from "react-native";
import { Inter_Regular, theme } from "../../../Theme/Theme";
import { getWidthBasedDimension, fontPixel,} from "../../../Utils/Responsive/Responsive";
import { isAndroid, isIOS } from "../../../Helper/VersionCheck";

export const styles = StyleSheet.create({
  backView: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
    zIndex: 999,
  },
  arrowContainer: {
    backgroundColor: theme.colors.lime_green,
    height: 26,
    width: 26.5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  chatImg: {
    height: 40,
    width: 40,
    resizeMode: "stretch",
    borderRadius: 100,
  },
  imgView: {
    paddingHorizontal: 10,
  },
  couchNameView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingRight: getWidthBasedDimension() / 8,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  root: {
    backgroundColor: theme.colors.white,
    flex: 1,
    marginVertical: isAndroid() ? 15 : 0, 
  },
  txtinputView: {
    backgroundColor: theme.colors.Pale_Lime_Green,
    paddingHorizontal: 15,
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
    marginRight: 10,
    borderColor: theme.colors.lime_green,
    borderWidth: 1,
  },
  rootView: {
    flexDirection: "row",
    backgroundColor: theme.colors.white,
  },
  btnView: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  root2: {
    color: theme.colors.Rich_Black,
    fontSize: fontPixel(12),
    fontFamily: Inter_Regular,
    textAlignVertical: "center",
    maxHeight: 120,
    minHeight: 50,
    paddingTop: isIOS() ? 15 : 0,
    paddingBottom: isIOS() ? 10 : 0,
  },
  emojiView: {
    marginRight: 10,
    alignSelf: "center",
  },
  textInputView: {
    flex: 1,
  },
  sendView: {
    height: 45,
    width: 45,
    alignItems: "center",
    backgroundColor: theme.colors.lime_green,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 100,
  },

  //   //   list
  leftContainer: {
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
    backgroundColor: theme.colors.Pale_Lime_Green,
    maxWidth: getWidthBasedDimension() / 1.5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 3,
    borderRadius: 10,
  },
  rightContainer: {
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
    backgroundColor: theme.colors.lime_green,
    maxWidth: getWidthBasedDimension() / 1.5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 3,
    borderRadius: 10,
  },
  timeView: {
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  timeText: {
    fontSize: fontPixel(9),
    color: theme.colors.Cool_Gray,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
});
