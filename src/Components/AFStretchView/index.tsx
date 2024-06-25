import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, theme } from "../../Theme/Theme";
import { fontPixel } from "../../Utils/Responsive/Responsive";

interface AFStretchProps {
  img: any;
  workoutName: string;
  min: string;
  onPress: () => void;
}

const AFStretchView: React.FC<AFStretchProps> = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={props.img} style={styles.img}/>
      <View style={styles.infoView}>
        <View >
          <Text
            variant="inter_Medium_12"
            color="black"
            textAlign="left"
            fontSize={fontPixel(11.5)}
          >
            {props.workoutName}
          </Text>
        </View>

        <Text
          variant="inter_Medium_12"
          color="black"
          textAlign="left"
          fontSize={fontPixel(9.8)}
          style={{color: theme.colors.Cool_Gray}}
        >
          {props.min}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AFStretchView;

export const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginVertical: 10,
    flexDirection: "row",
    paddingBottom: 2,
    borderBottomColor: theme.colors.Cool_Gray,
    borderBottomWidth: 1,
  },
  infoView: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  img: {
    alignSelf: 'center'
  }
});
