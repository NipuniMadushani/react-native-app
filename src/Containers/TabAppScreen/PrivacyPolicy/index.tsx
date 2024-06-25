import React from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS, { PolicyData } from "../../../Utils/Constants/String";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import { theme, Text } from "../../../Theme/Theme";
import { fontPixel } from "../../../Utils/Responsive/Responsive";

const PrivacyPolicyScreen = ({ navigation }: any) => {
  const _backPress = () => {
    navigation.goBack();
  };

  const _policyRender = ({ item }: any) => {
    return (
      <View style={styles.renderView}>
        <Text
          variant="Inter_SemiBold_12"
          color="Rich_Black"
          style={styles.titleText}
        >
          {item.title}
        </Text>
        <View>
          <Text
            variant="inter_Medium_12"
            color="Cool_Gray"
            style={styles.subTitleText}
          >
            {item.subtitle}
          </Text>
        </View>
        {item.content && (
          <View style={styles.contentContainer}>
            <View style={styles.dotFlexView}>
              <View style={styles.dot}></View>
              <Text
                variant="inter_Medium_12"
                color="Cool_Gray"
                style={styles.subTitleText}
              >
                {item.content}
              </Text>
            </View>
            <View style={styles.dotFlexView}>
              <View style={styles.dot}></View>
              <Text
                variant="inter_Medium_12"
                color="Cool_Gray"
                style={styles.subTitleText}
              >
                {item.content}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <>
      <AFSafeAreView />
      <AFBackButton title={STRINGS.privacyPolicy.title} onPress={_backPress} />
      <ScrollView style={styles.container}>
        <View style={{ height: 10 }}></View>
        <FlatList data={PolicyData} renderItem={_policyRender} scrollEnabled={false}/>
      </ScrollView>
      <AFBottomSafeAreView />
    </>
  );
};

export default PrivacyPolicyScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  renderView: {
    paddingBottom: 10,
  },
  titleText: {
    fontSize: fontPixel(14.6),
    paddingBottom: 10,
  },
  subTitleText: {
    fontSize: fontPixel(10.8),
    paddingBottom: 15,
    lineHeight: 18,
  },
  contentContainer: {},
  contentText: {
    paddingHorizontal: 10,
  },
  contetentTwo: {},
  dot: {
    height: 7,
    width: 7,
    borderRadius: 20,
    backgroundColor: theme.colors.Cool_Gray,
    justifyContent: "center",
    marginTop: 10,
    marginRight: 5,
  },
  dotFlexView: {
    flexDirection: "row",
  },
});
