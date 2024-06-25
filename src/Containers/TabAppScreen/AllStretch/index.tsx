import React from "react";
import { View, Text, StyleSheet , FlatList } from "react-native";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS from "../../../Utils/Constants/String";
import { theme } from "../../../Theme/Theme";
import { StretchingData } from "../../../Utils/Constants/String";
import AFStretchView from "../../../Components/AFStretchView";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import { CHALLENGE_WORKOUT } from "../../../Navigator/HomeNavigator/HomeNavigator";

const AllStretch = ({ navigation }: any) => {
  
  const _backPress = () => {
    navigation.goBack();
  };

  const _stretchItemPress = () => {
    navigation.navigate(CHALLENGE_WORKOUT);
  };

  const _stretchWorkOutRender = ({ item, index }: any) => {
    return (
      <AFStretchView
        img={item.image}
        workoutName={item.workOutName}
        min={item.min}
        onPress={_stretchItemPress}
      />
    );
  };

  return (
    <>
    <AFSafeAreView />
      <AFBackButton title={STRINGS.homeScreen.stretch} onPress={_backPress} />
      <View style={styles.container}>
        <FlatList
          data={StretchingData}
          renderItem={_stretchWorkOutRender}
          // horizontal
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default AllStretch;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  columnWrapper: {
    flex:1,
    justifyContent: 'space-between'
  }
});
