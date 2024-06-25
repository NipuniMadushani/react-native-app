import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFAuthScreenTitle from "../../../Components/AFAuthScreenTitle";
import STRINGS from "../../../Utils/Constants/String";
import { styles } from "./styles";
import { theme } from "../../../Theme/Theme";
import AFBackButton from "../../../Components/AFBackButton";
import AFToggleASwitch from "../../../Components/AFToggleSwitch";
import { fontPixel,  } from "../../../Utils/Responsive/Responsive";
import AFButton from "../../../Components/AFButton";
import { Text } from "../../../Theme/Theme";
import SVG from "../../../Utils/Assets/Svg";
import { HOME_NAVIGATOR } from "../../../Navigator/ApplicationNavigator";
import { topTireData } from "../../../Utils/Constants/String";


const SubscriptionScreen = ({ navigation }: any) => {
  const [loader, setLoader] = useState(false);
  const [isToggle, setIsToggle] = useState(true);
  const [selectPackage, setSelectPackage] = useState(1);

  useEffect(() => {
    setLoader(true);
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 2000); // 100 seconds in milliseconds
    return () => clearTimeout(timeout);
  }, []);

  const _closeOnPress = () => {
    navigation.goBack();
  };

  const _toggleSWitch = (value: any) => {
    setIsToggle(!isToggle);
  };

  const _SelectPackagePress = (item: any) => {
    setSelectPackage(item._id)
  };

  const _purchesPlanPress = () => {
    navigation.navigate(HOME_NAVIGATOR)
  };

  const _packageRenderItem = ({ item } : any) => {
    return (
      <View style={styles.renderContainer}>
        <View style={styles.titleRenderView}>
          <Text variant="Inter_SemiBold_12" color="black" style={{ fontSize: fontPixel(13) }}>{item.title}</Text>
        </View>

        <View style={[styles.boxView , {borderColor: selectPackage == item._id? theme.colors.lime_green : theme.colors.Pale_Lime_Green}]}>
          <Text variant="Inter_SemiBold_12" color="black" style={styles.monthText}>{item.month}</Text>
          <View style={styles.loremFlexView}>
            <View><SVG.CIRCLE_TICK /></View>
            <View style={styles.loremTextView}>
              <Text  variant="inter_Medium_12"  color="black" style={styles.loremText} >
                {item.info.lorem1}
              </Text>
            </View>
          </View>
          <View style={styles.loremFlexView}>
            <View><SVG.CIRCLE_TICK /></View>
            <View style={styles.loremTextView}>
              <Text variant="inter_Medium_12" color="black"  style={styles.loremText}>
                {item.info.lorem2}
              </Text>
            </View>
          </View>
          <View style={styles.loremFlexView}>
            <View><SVG.CIRCLE_TICK /></View>
            <View style={styles.loremTextView}>
              <Text variant="inter_Medium_12"  color="black" style={styles.loremText} >
                {item.info.lorem3}
              </Text>
            </View>
          </View>
          <AFButton transparent otherStyle={styles.renderButtonView} buttonTitle={STRINGS.Subscription.select} onPress={() => _SelectPackagePress(item)}/>
        </View>
      </View>
    );
  };

  return (
    <>
      <AFSafeAreView />
      <View style={styles.container}>
        {loader ? (
          <View style={styles.titleView}>
            <AFAuthScreenTitle
              title={STRINGS.Subscription.generatePlan}
              otherStyle={{ width: "30%", marginBottom: 5 }}
            />
          </View>
        ) : (
          <AFBackButton
            close
            title={STRINGS.Subscription.package}
            onPress={_closeOnPress}
          />
        )}
        {loader ? (
          <View style={styles.indicator}>
            <ActivityIndicator size={"large"} color={theme.colors.lime_green} />
          </View>
        ) : (
          <>
            <View style={{ height: 5 }}></View>
            <AFToggleASwitch
              toggleTextOne={STRINGS.Subscription.month}
              toggleTextTwo={STRINGS.Subscription.annually}
              toggleSwitchOnPress={() => _toggleSWitch()}
              isEnabled={isToggle}
            />
            <FlatList data={topTireData} renderItem={_packageRenderItem} />
            <AFButton buttonTitle={STRINGS.Subscription.parchesPlan} onPress={_purchesPlanPress}/>
            <View style={styles.googlePayView}>
              <Text
                variant="Inter_Regular_12"
                color="black"
                textAlign="center"
                style={styles.googlePayText}
              >
                {STRINGS.Subscription.googlePay}
              </Text>
            </View>
          </>
        )}
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default SubscriptionScreen;
