import { StyleSheet } from "react-native";
import { theme } from "../../../Theme/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  chatRenderView: {
    paddingVertical: 10,
    flexDirection: "row",
  },
  imgView: {
    backgroundColor: theme.colors.Cool_Gray,
    borderRadius: 100,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: theme.colors.Cool_Gray,
  },
  nameFlexView: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingLeft: 10,
  },
});
