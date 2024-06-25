import React, { useState } from "react";
import { View, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS from "../../../Utils/Constants/String";
import { styles } from "./styles";
import { FavoriteData } from "../../../Utils/Constants/String";
import { Text } from "../../../Theme/Theme";
import AFBox from "../../../Components/AFBox";
import SVG from "../../../Utils/Assets/Svg";
import { CHALLENGE_VIDEO } from "../../../Navigator/HomeNavigator/HomeNavigator";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";

const FavoriteScreen = ({ navigation }: any) => {
  const [like , setLike] = useState(true);

  const _backPress = () => {
    navigation.goBack();
  };

  const _favItemPress = () => {
    navigation.navigate(CHALLENGE_VIDEO);
  };

  const _toggleLike = (item : any) => {
    setLike(item.id)
    setLike(like)
  };

  const _favRender = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.renderView} onPress={_favItemPress} activeOpacity={1}>
        <View>
          <Image source={item.image} style={styles.renderImg} />
          <View style={styles.boxView}>
            <AFBox
              icon={like ? <SVG.HEART /> : <SVG.HEART_OUTLINE />}
              onPress={() => _toggleLike(item)}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text  variant="inter_Medium_12" color="Rich_Black"  textAlign="left" style={styles.titleText}>
            {item.name}
          </Text>
          <View style={styles.calBurnFlexView}>
            <View style={styles.iconView}>
              <SVG.FAV_TIME />
            </View>
            <Text variant="inter_Medium_12" color="Cool_Gray" textAlign="left" style={styles.burnText}>
              {item.min}
            </Text>
            <View style={[styles.iconView , styles.burnIconView]}>
              <SVG.FAV_BURN />
            </View>
            <Text variant="inter_Medium_12" color="Cool_Gray" textAlign="left" style={styles.burnText}>
              {item.burn}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
            

  return (
    <>
      <AFSafeAreView />
      <AFBackButton title={STRINGS.favorite.title} onPress={_backPress} />
      <ScrollView style={styles.container}>
        <View style={{ height: 10 }}></View>
        <FlatList
          data={FavoriteData}
          renderItem={_favRender}
          scrollEnabled={false}
        />
      </ScrollView>
      <AFBottomSafeAreView />
    </>
  );
};

export default FavoriteScreen;
