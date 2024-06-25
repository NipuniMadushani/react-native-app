import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";
import { fontPixel, getHeightBasedDimension, getWidthBasedDimension } from "../../../Utils/Responsive/Responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  msgBox: {
    backgroundColor: theme.colors.Pale_Lime_Green,
    height: getHeightBasedDimension() / 4,
    marginVertical: 13,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: getWidthBasedDimension() / 6
  },
});
