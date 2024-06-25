import React, {useState, useRef, useEffect} from 'react';
import {View, TouchableOpacity, Animated, Easing} from 'react-native';
import AFSafeAreView from '../../../Components/AFSafeAreaView';
import AFBottomSafeAreView from '../../../Components/AFBottomSafeAreaView';
import AFBackButton from '../../../Components/AFBackButton';
import SVG from '../../../Utils/Assets/Svg';
import AFAuthScreenTitle from '../../../Components/AFAuthScreenTitle';
import STRINGS from '../../../Utils/Constants/String';
import ActivityButton from '../../../Components/AFActivityButton';
import AFButton from '../../../Components/AFButton';
import {getHeightBasedDimension, getWidthBasedDimension} from '../../../Utils/Responsive/Responsive';
import { styles } from '../ActiveScreen/styles';
import { TARGET_INFO } from '../../../Navigator/AuthenticationNavigator/AuthenticationNavigator';

const GenderInfo = ({navigation}: any) => {
  const [selectActive, setSelectActive] = useState('Male');
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const _backPress = () => {
    navigation.goBack();
  };

  const _genderOnPress = () => {
    navigation.navigate(TARGET_INFO);
  };

  const handleActivityPress = (activity: string) => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setSelectActive(activity);
      fadeAnim.setValue(1); // Reset fade animation value
      slideAnim.setValue(0); // Reset slide animation value
    });
  };
  

  
  return (
    <>
      <AFSafeAreView />
      <View style={styles.container}>
        <View style={styles.backView}>
          <AFBackButton onPress={_backPress} />
        </View>
        <View style={styles.imgView}>
          <Animated.View
            style={[
              styles.imageContainer,
              {
                opacity: fadeAnim,
                transform: [
                  {
                    translateX: slideAnim.interpolate({
                      inputRange: [0, 1],
                      // outputRange: [0, 100], //right side
                      outputRange: [0, 300],  // left side 
                    }),
                  },
                ],
              },
            ]}>
            {selectActive === 'Male' && (
              <View style={[styles.svgView, {paddingRight: 5}]}>
                <SVG.MALE width={getWidthBasedDimension() / 1.1} />
              </View>
            )}
            {selectActive === 'Female' && (
              <View style={styles.svgView}>
                <SVG.Female width={getWidthBasedDimension() / 1.1} />
              </View>
            )}
          </Animated.View>
        </View>

        <View style={{height: getHeightBasedDimension() / 20}}></View>
        <AFAuthScreenTitle
          title={STRINGS.gender.title}
          otherStyle={{width: '18%', marginBottom: 5}}
        />
        <View style={styles.buttonView}>
          <ActivityButton
            onPress={() => handleActivityPress('Male')}
            text={STRINGS.gender.male}
            selectActivity={selectActive === 'Male'}
          />
          <ActivityButton
            onPress={() => handleActivityPress('Female')}
            text={STRINGS.gender.female}
            selectActivity={selectActive === 'Female'}
          />
        </View>
      </View>
      <AFButton buttonTitle={STRINGS.common.next} onPress={_genderOnPress}/>
      <AFBottomSafeAreView />
    </>
  );
};

export default GenderInfo;

