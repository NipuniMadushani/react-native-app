import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { theme, Text } from "../../Theme/Theme";
import Assets from "../../Utils/Assets/Assets";
import AFBackButton from "../AFBackButton";
import AFBox from "../AFBox";

interface AFTopImgProps {
  icon: any;
  opPress: () => void;
  backOnPress: () => void;
  title : string;
  exe : boolean;
}

const AFTopImgView: React.FC<AFTopImgProps> = (props: any) => {
  return (
    <View style={styles.container}>
      <Image source={Assets.trainingOne} style={styles.img} />
      <View style={styles.backPositionView}>
        <View style={{ flex: 1 }}>
          <AFBackButton transparent White title={props.title} onPress={props.backOnPress}/>
        </View>
        <View style={styles.likeView}>
          <AFBox icon={props.icon} onPress={props.opPress}/>
        </View>
      </View>
        {props.exe && <View style={styles.exeView}>
          <Text
            variant="Inter_Regular_12"
            color="white"
          >
            {props.exeTitle}
          </Text>
        </View>}
    </View>
  );
};

export default AFTopImgView;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  img: {
    width: "100%",
  },
  backPositionView: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
  },
  exeView: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  likeView: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
  },
});
