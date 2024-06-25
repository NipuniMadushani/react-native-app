import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";
import { getHeightBasedDimension } from "../../../Utils/Responsive/Responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  img: {
    height: getHeightBasedDimension() / 9.2,
    width: getHeightBasedDimension() / 9.2,
  },
  profileImgView: {
    position: "absolute",
    top: 0,
    alignSelf: "center",
    zIndex: 999,
    marginTop: 10,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: theme.colors.lime_green,
    justifyContent: "center",
    alignItems: "center",
  },
  editView: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: theme.colors.white,
  },
  profileContainer: {
    flex: 0.2,
  },
  textInputView : {
    flex:1,
  }
});
