import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, theme } from "../../Theme/Theme";
import { fontPixel } from "../../Utils/Responsive/Responsive";
import { isAndroid } from "../../Helper/VersionCheck";

interface AFSellTileProps {
  title: string;
  seeAll: boolean;
  seeAllPress: () => void;
}

const AFSeeAllTitle: React.FC<AFSellTileProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text
        variant="inter_Medium_15"
        color="white"
        textAlign="left"
        style={[styles.textTitle, { flex: 1 , fontSize: fontPixel(14) }]}
      >
        {props.title}
      </Text>
      {props.seeAll === true && (
        <TouchableOpacity onPress={props.seeAllPress} style={{ alignSelf: "center"}}>
          <Text
            variant="Inter_Regular_12"
            color="white"
            textAlign="left"
            fontSize={fontPixel(11)}
            style={styles.textTitle}
          >
            {"See all"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AFSeeAllTitle;

export const styles = StyleSheet.create({
  textTitle: {
    color: theme.colors.Rich_Black,
  },
  container: {
    flexDirection: "row",
    paddingVertical: isAndroid() ? 0 : 5,
  },
});
