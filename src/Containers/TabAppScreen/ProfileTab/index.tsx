import React, { useState } from "react";
import { View, Image, TouchableOpacity, ScrollView,Share } from "react-native";
import { styles } from "./styles";
import Assets from "../../../Utils/Assets/Assets";
import SVG from "../../../Utils/Assets/Svg";
import { Text } from "../../../Theme/Theme";
import STRINGS from "../../../Utils/Constants/String";
import AFPremium from "../../../Components/AFPremium";
import AFProfileNameBox from "../../../Components/AFProfileNameBox";
import AFTabBarVIew from "../../../Components/AFTabBarView";
import AfModal from "../../../Components/AFModal";
import AFButton from "../../../Components/AFButton";
import { HOME_TAB } from "../../../Navigator/BottomTabNavigator/Maintab";
import { ONBOARDING, SUBSCRIPTION_SCREEN } from "../../../Navigator/AuthenticationNavigator/AuthenticationNavigator";
import { COUCH_PROFILE, EDIT_PROFILE, FAQ, PRIVACY_POLICY } from "../../../Navigator/HomeNavigator/HomeNavigator";

const ProfileTab = ({ navigation }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const _cancelPress = () => {
    setIsModalVisible(false);
  };

  const _editProfile = () => {
    navigation.navigate(EDIT_PROFILE);
  };

  const _restartProgress = (Name : any) => {
    // setIsModalVisible(!isModalVisible);
    setIsModalVisible(Name);
  };

  const _deleteAllData = (Name : any) => {
    setIsModalVisible(Name);
  };

  const _restartPress = async() => {
    setIsModalVisible(false);
    await navigation.navigate(HOME_TAB)
  };

  const _deletePress = async() => {
    setIsModalVisible(!isModalVisible);
    await navigation.navigate(HOME_TAB)
  };
  
  const _couchPress = () => {
    navigation.navigate(COUCH_PROFILE)
  };

  const _sharePress = async() => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      console.log('error' , error);
      
    }
  };

  const _faqPress = () => {
    navigation.navigate(FAQ)
  };

  const _premiumPress = () => {
    navigation.navigate(SUBSCRIPTION_SCREEN)
  };

  const _privacyPress = () => {
    navigation.navigate(PRIVACY_POLICY)
  };

  const _logOutPress = async(Name : any) => {
    setIsModalVisible(Name);
  };

  const _logOutOkPress = async() => {
    setIsModalVisible(!isModalVisible);
    await navigation.navigate(ONBOARDING)
  };

  return (
    <View style={styles.container}>
      <View style={styles.premiumBox}>
        <SVG.PREMIUM style={{marginRight: 3,}}/>
        <Text
          variant="Inter_SemiBold_12"
          color="Rich_Black"
          textAlign="center"
          style={styles.titleText}
        >
          {STRINGS.editProfile.premium}
        </Text>
      </View>
      <View style={styles.profileFlexView}>
        <View style={styles.profileImgView}>
          <Image source={Assets.Profile} style={styles.img} />
          <TouchableOpacity style={styles.editView} onPress={_editProfile}>
            <SVG.EDIT />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <Text variant="Inter_SemiBold_12" color="white" textAlign="center">
            {"Thomas Evans"}
          </Text>

          <View style={styles.infoFlexView}>
            <View>
              <Text
                variant="Inter_SemiBold_12"
                color="lime_green"
                textAlign="center"
                style={styles.titleText}
              >
                {"Male"}
              </Text>
              <Text
                variant="Inter_Regular_12"
                color="lime_green"
                textAlign="center"
              >
                {STRINGS.profileTab.gender}
              </Text>
            </View>

            <View>
              <Text
                variant="Inter_SemiBold_12"
                color="lime_green"
                textAlign="center"
                style={styles.titleText}
              >
                {`${"5.6"}${"ft"}`}
              </Text>
              <Text
                variant="Inter_Regular_12"
                color="lime_green"
                textAlign="center"
              >
                {STRINGS.profileTab.height}
              </Text>
            </View>

            <View>
              <Text
                variant="Inter_SemiBold_12"
                color="lime_green"
                textAlign="center"
                style={styles.titleText}
              >
                {"154lbs"}
              </Text>
              <Text
                variant="Inter_Regular_12"
                color="lime_green"
                textAlign="center"
              >
                {STRINGS.profileTab.weight}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <AFPremium onPress={_premiumPress} />
        <AFProfileNameBox
          nameTitle={STRINGS.profileTab.restart}
          onPress={() => _restartProgress("restart")}
        />
        <AFProfileNameBox
          nameTitle={STRINGS.profileTab.deleteData}
          onPress={() => _deleteAllData("deleteData")}
        />
        <AFProfileNameBox
          nameTitle={STRINGS.profileTab.couch}
          onPress={_couchPress}
        />
        <AFProfileNameBox
          nameTitle={STRINGS.profileTab.share}
          onPress={_sharePress}
        />
        <AFProfileNameBox
          nameTitle={STRINGS.profileTab.faq}
          onPress={_faqPress}
        />
        <AFProfileNameBox
          nameTitle={STRINGS.profileTab.privacyPolicy}
          onPress={_privacyPress}
        />
        <AFProfileNameBox
          nameTitle={STRINGS.profileTab.logOut}
          onPress={() => _logOutPress("logOut")}
        />
      </ScrollView>

      <AFTabBarVIew />

      <AfModal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        // otherModalContent={{paddingHorizontal : 38,}}
        modalContent={
          <>
            <View>
              <Text
                variant="inter_SemiBold_17"
                color="lime_green"
                textAlign="center"
              >
                {isModalVisible == "restart" && STRINGS.profileTab.restart}
                {isModalVisible == "deleteData" &&
                  STRINGS.profileTab.deleteData}
                {isModalVisible == "logOut" && STRINGS.profileTab.logOut}
              </Text>
              <Text
                variant="inter_Medium_12"
                color="white"
                textAlign="center"
                style={{ paddingTop: 10 }}
              >
                {isModalVisible == "restart" &&
                  STRINGS.profileTab.restartContent}
                {isModalVisible == "deleteData" &&
                  STRINGS.profileTab.deleteContent}
                {isModalVisible == "logOut" && STRINGS.profileTab.logOutContent}
                {/* {STRINGS.profileTab.restartContent} */}
              </Text>
              <View style={styles.buttonView}>
                <AFButton
                  otherStyle={styles.btn}
                  transparent
                  buttonTitle={STRINGS.profileTab.cancel}
                  onPress={_cancelPress}
                />
                {isModalVisible == "restart" && (
                  <AFButton
                    otherStyle={styles.btn}
                    transparent
                    buttonTitle={STRINGS.profileTab.restartBtn}
                    onPress={_restartPress}
                  />
                )}
                {isModalVisible == "deleteData" && (
                  <AFButton
                    otherStyle={styles.btn}
                    transparent
                    buttonTitle={STRINGS.profileTab.delete}
                    onPress={_deletePress}
                  />
                )}
                {isModalVisible == "logOut" && (
                  <AFButton
                    otherStyle={styles.btn}
                    transparent
                    buttonTitle={STRINGS.profileTab.logOut}
                    onPress={_logOutOkPress}
                  />
                )}
              </View>
            </View>
          </>
        }
      />
    </View>
  );
};

export default ProfileTab;
