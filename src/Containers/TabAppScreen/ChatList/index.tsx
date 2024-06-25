import React from "react";
import { View, ScrollView, FlatList, TouchableOpacity, Image, } from "react-native";
import { styles } from "./styles";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS from "../../../Utils/Constants/String";
import { ChatListData } from "../../../Utils/Constants/String";
import { CHAT_WITH_COUCH } from "../../../Navigator/HomeNavigator/HomeNavigator";
import { Text } from "../../../Theme/Theme";

const ChatListScreen = ({ navigation }: any) => {
  const _backPress = () => {
    navigation.goBack();
  };

  const _chatItemPress = () => {
    navigation.navigate(CHAT_WITH_COUCH);
  };

  const _chatListRender = ({ item, index }: any) => {
    return (
      <TouchableOpacity style={styles.chatRenderView} onPress={() => _chatItemPress()} >
        <View style={styles.imgView}>
          <Image source={item.image} style={styles.img} />
        </View>
        <View style={styles.nameFlexView}>
          <Text variant="Inter_SemiBold_12" color="Rich_Black">
            {item.name}
          </Text>
          <Text variant="inter_Medium_12" color="lime_green">
            {item.time}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <AFSafeAreView />
      <AFBackButton
        title={STRINGS.notificationMessage.message}
        onPress={_backPress}
      />
      <View style={styles.container}>
          <FlatList
            data={ChatListData}
            renderItem={_chatListRender}
            scrollEnabled={false}
          />
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default ChatListScreen;
