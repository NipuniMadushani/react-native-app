import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";
import { fontPixel, getHeightBasedDimension, getWidthBasedDimension } from "../../../Utils/Responsive/Responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  couchProfileView: {
    alignSelf: "center",
    paddingHorizontal: getWidthBasedDimension() / 20,
    marginVertical: 10,
  },
  img: {
    height: getHeightBasedDimension() / 8.2,
    width: getHeightBasedDimension() / 8.2,
    alignSelf: "center",
  },
  couchName: {
    paddingTop: 5,
  },
  couchDis: {
    paddingTop: 5,
    fontSize: fontPixel(10)
  },
  contentText: {
    fontSize: fontPixel(12),
  }
});
