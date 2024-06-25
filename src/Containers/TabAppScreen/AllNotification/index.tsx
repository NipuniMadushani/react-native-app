import React from "react";
import { View, Text, StyleSheet,FlatList } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS from "../../../Utils/Constants/String";
import { NotificationData } from "../../../Utils/Constants/String";
import AFNotificationView from "../../../Components/AFNotificationView";
import { theme } from "../../../Theme/Theme";

const AllNotification = ({navigation} : any) => {

    const _backPress = () => {
      navigation.goBack();
    };

    const _notificationRenderItem = ({ item }: any) => {
      return (
        <AFNotificationView notification={item.notification} time={item.time} />
      );
    };

  return (
    <>
      <AFSafeAreView />
      <AFBackButton title={STRINGS.notificationMessage.notification} onPress={_backPress}/>
      <View style={styles.container}>
      <View>
          <FlatList
            data={NotificationData}
            renderItem={_notificationRenderItem}
          />
        </View>
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default AllNotification;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex:1,
    backgroundColor: theme.colors.white,
  },
});
