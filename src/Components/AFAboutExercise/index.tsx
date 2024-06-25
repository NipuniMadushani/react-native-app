import React from "react";
import { View, StyleSheet } from "react-native";
import AFSeeAllTitle from "../AFSellAllTitle";
import STRINGS from "../../Utils/Constants/String";
import { Text } from "../../Theme/Theme";
import { fontPixel } from "../../Utils/Responsive/Responsive";

interface AFAboutExerciseProps {
  about: string;
}

const AFAboutExercise: React.FC<AFAboutExerciseProps> = (props) => {
  return (
    <>
      <AFSeeAllTitle title={STRINGS.videoScreen.aboutExe} />
      <View style={styles.aboutView}>
        <Text variant="inter_Medium_12" color="Cool_Gray" lineHeight={19} style={styles.loremText}>
          {props.about}
        </Text>
      </View>
    </>
  );
};

export default AFAboutExercise;

export const styles = StyleSheet.create({
    aboutView: {
        marginVertical: 7,
    },
    loremText : {
      fontSize : fontPixel(11),
    }
});
