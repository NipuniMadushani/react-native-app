import React, { useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS from "../../../Utils/Constants/String";
import { FaqData } from "../../../Utils/Constants/String";
import { Text, theme } from "../../../Theme/Theme";
import { fontPixel } from "../../../Utils/Responsive/Responsive";
import SVG from "../../../Utils/Assets/Svg";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";

const FaqScreen = ({ navigation }: any) => {
  const [selectFaq, setSelectFaq] = useState(FaqData[0].id);

  const _backPress = () => {
    navigation.goBack();
  };

  const _faqItemPress = (item : any) => {
    setSelectFaq(item.id);
  };

  const _faqRender = ({ item, index } : any) => {
    const isLastItem = index === FaqData.length - 1;
    return (
      <TouchableOpacity
        style={[
          styles.renderView,
          {
            borderBottomColor: isLastItem ? "red" : theme.colors.STROKE_COLOR,
            borderBottomWidth: isLastItem ? 0 : 0.7,
          },
        ]}
        onPress={() => _faqItemPress(item)}
      >
        <View
          style={[
            styles.flexView,
            { paddingBottom: selectFaq === item.id && 10 },
          ]}
        >
          <View style={styles.queView}>
            <Text variant="Inter_SemiBold_12" color="Rich_Black">
              {item.que}
            </Text>
          </View>
          <View style={styles.arrowView}>
            {selectFaq === item.id ? <SVG.UP_ARROW /> : <SVG.SMALL_DOWN_ARROW />}
          </View>
        </View>
        {selectFaq === item.id && (
          <Text
            variant="Inter_Regular_12"
            color="Cool_Gray"
            style={styles.ansText}
          >
            {item.ans}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
    <AFSafeAreView />
      <AFBackButton title={STRINGS.faq.title} onPress={_backPress} />
      <View style={styles.container}>
        <FlatList
          data={FaqData}
          renderItem={_faqRender}
          scrollEnabled={false}
        />
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default FaqScreen;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingHorizontal: 15,
  },
  renderView: {
    paddingVertical: 16,
    borderBottomWidth: 0.7,
  },
  queView: {
    flex: 1,
    justifyContent: "center",
  },
  ansText: {
    fontSize: fontPixel(10.2),
    lineHeight: 18,
  },
  flexView: {
    flexDirection: "row",
  },
  arrowView: {
    alignSelf: "center",
  },
});
