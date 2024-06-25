import React from "react";
import { View, Image, FlatList } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import { styles } from "./styles";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS, { CouchProfileData } from "../../../Utils/Constants/String";
import Assets from "../../../Utils/Assets/Assets";
import { Text } from "../../../Theme/Theme";
import AFSeeAllTitle from "../../../Components/AFSellAllTitle";
import AFButton from "../../../Components/AFButton";
import { CHAT_WITH_COUCH } from "../../../Navigator/HomeNavigator/HomeNavigator";

const CouchProfileScreen = ({ navigation }: any) => {

  const _backPress = () => {
    navigation.goBack();
  };

  const _chatCouchPress = () => {
    navigation.navigate(CHAT_WITH_COUCH);
  };

  const _couchProfileRender = ({ item }: any) => {
    return (
      <View>
        <AFSeeAllTitle title={item.name} />
        <Text variant="Inter_Regular_12" color="Cool_Gray" style={styles.contentText} >
          {item.content}
        </Text>
        <Text variant="Inter_Regular_12"  color="Cool_Gray" style={[styles.contentText , {paddingVertical: 15,}]} >
          {item.content1}
        </Text>
        <Text variant="Inter_Regular_12"  color="Cool_Gray" style={styles.contentText} >
          {item.content2}
        </Text>
      </View>
    );
  };

  return (
    <>
      <AFSafeAreView />
      <AFBackButton title={STRINGS.couchProfile.title} onPress={_backPress} />
      <View style={styles.container}>
        <View style={styles.couchProfileView}>
          <Image source={Assets.CouchProfile} style={styles.img} />
          <Text
            variant="inter_Medium_15"
            color="Rich_Black"
            textAlign="center"
            style={styles.couchName}
          >
            {"Daniel Parker"}
          </Text>
          <Text
            variant="Inter_Regular_12"
            color="Rich_Black"
            textAlign="center"
            style={styles.couchDis}
          >
            {"The pain you feel today will be the strength you feel tomorrow"}
          </Text>
        </View>
        <View style={{ height: 15 }}></View>

        <View>
          <FlatList data={CouchProfileData} renderItem={_couchProfileRender} scrollEnabled={false}/>
        </View>
      </View>
      <AFButton buttonTitle={STRINGS.couchProfile.chatCouch} onPress={_chatCouchPress}/>
      <AFBottomSafeAreView />
    </>
  );
};

export default CouchProfileScreen;
