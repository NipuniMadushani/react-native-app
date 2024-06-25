import { View , StyleSheet } from "react-native";
import React from "react";
import SVG from "../../Utils/Assets/Svg";
import { Text, theme} from "../../Theme/Theme";
import { fontPixel } from "../../Utils/Responsive/Responsive";

interface AFNotificationProps {
    time: string,
    notification: string,
}

const AFNotificationView: React.FC<AFNotificationProps> = (props) => {
  return (
    <View style={styles.renderContainer}>
        <View style={styles.notificationView}>
          <SVG.NOTIFICATION />
        </View>
        <View style={styles.flexView}>
          <View style={{ flex: 1 }}>
            <Text  variant="Inter_Regular_12" color="Cool_Gray"  style={styles.notificationText} >
              {props.notification}
            </Text>
          </View>
          <View>
            <Text variant="inter_Medium_12" color="lime_green" style={[styles.notificationText , {marginTop: -20,}]} >
              {props.time}
            </Text>
          </View>
        </View>
      </View>
  );
};

export default AFNotificationView;




export const styles = StyleSheet.create({
  renderContainer: {
    flexDirection: "row",
    marginVertical: 7,
  },
  flexView: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    alignSelf: 'center',
  },
  notificationText: {
    fontSize: fontPixel(10),
  },
  notificationView: {
    padding: 12,
    backgroundColor: theme.colors.Pale_Lime_Green,
    borderRadius: 100,
    alignSelf: "center",
  },
});