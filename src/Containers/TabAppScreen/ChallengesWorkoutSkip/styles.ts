import { StyleSheet } from "react-native";
import { fontPixel,  getHeightBasedDimension, } from "../../../Utils/Responsive/Responsive";
import { theme } from "../../../Theme/Theme";
import { isAndroid } from "../../../Helper/VersionCheck";

export const styles = StyleSheet.create({
  imgBackRound: {
    backgroundColor: "res",
  },
  backImg: {
    height: getHeightBasedDimension() / 2.6,
    width: "100%",
    resizeMode: "stretch",
  },
  stickyView: {
    position: "absolute",
    top: 0,
    bottom: 20,
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
  },
  secondView: {
    backgroundColor: "#2C2C2C",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 50,
  },
  stepCount: {
    fontSize: fontPixel(35),
  },
  progressBack: {
    backgroundColor: "#2C2C2C",
    borderRadius: 150,
  },
  container: {
    // backgroundColor: "red",
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  secText : {
    fontSize: fontPixel(13),
    marginTop:  isAndroid() ? 0 : 2
  },
  workOutView: {
    backgroundColor: theme.colors.Pale_Lime_Green,
    height: getHeightBasedDimension() / 3.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 15,
  }
});
