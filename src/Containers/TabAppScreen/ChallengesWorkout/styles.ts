import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";
import { fontPixel, getHeightBasedDimension } from "../../../Utils/Responsive/Responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: getHeightBasedDimension() / 20,
    paddingHorizontal: 15,
  },
  calView: {
    bottom: -25,
  },
  viewAllView: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  downArrowView: {
    alignSelf: 'center',
  },
  viewAllText: {
    fontSize: fontPixel(11),
  },
  backView : {
    zIndex: 999,
  }
});
