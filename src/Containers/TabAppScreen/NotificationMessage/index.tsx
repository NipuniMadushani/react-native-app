import React from "react";
import { View, FlatList } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS from "../../../Utils/Constants/String";
import AFSeeAllTitle from "../../../Components/AFSellAllTitle";
import { styles } from "./styles";
import { NotificationData } from "../../../Utils/Constants/String";
import { Text } from "../../../Theme/Theme";
import SVG from "../../../Utils/Assets/Svg";
import { fontPixel } from "../../../Utils/Responsive/Responsive";
import { ALL_NOTIFICATION, CHAT_LIST } from "../../../Navigator/HomeNavigator/HomeNavigator";
import AFNotificationView from "../../../Components/AFNotificationView";

const NotificationMessage = ({navigation} : any) => {

  const _backPress = () => {
    navigation.goBack();
  };

  const _notificationSeeAllPress = () => {
    navigation.navigate(ALL_NOTIFICATION);
  };

  const _messageSeeAllPress = () => {
    navigation.navigate(CHAT_LIST);
  };

  const _notificationRenderItem = ({ item, index }: any) => {
    return index < 5 ? (
      <AFNotificationView notification={item.notification} time={item.time} />
    ) : null;
  };

  return (
    <>
      <AFSafeAreView />
      <AFBackButton title={STRINGS.notificationMessage.notification} seeAll seeAllPress={_notificationSeeAllPress} onPress={_backPress}/>
      <View style={styles.container}>
        <View>
          <FlatList
            data={NotificationData}
            renderItem={_notificationRenderItem}
          />
        </View>
        <View style={{ height: 10 }}></View>
        <AFSeeAllTitle title={STRINGS.notificationMessage.message} seeAll seeAllPress={_messageSeeAllPress}/>
        <View style={styles.msgBox}>
          <Text variant="inter_Medium_15" color="Rich_Black" textAlign="center">
            {STRINGS.notificationMessage.noMsg}
          </Text>
          <View style={{ height: 10 }}></View>
          <Text variant="Inter_Regular_12" color="Cool_Gray" textAlign="center">
            {STRINGS.notificationMessage.content}
          </Text>
        </View>
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default NotificationMessage;
