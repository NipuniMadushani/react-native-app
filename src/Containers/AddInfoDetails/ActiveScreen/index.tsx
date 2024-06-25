import React, {useState, useRef, useEffect} from 'react';
import {View, TouchableOpacity, Animated, Easing} from 'react-native';
import AFSafeAreView from '../../../Components/AFSafeAreaView';
import AFBottomSafeAreView from '../../../Components/AFBottomSafeAreaView';
import AFBackButton from '../../../Components/AFBackButton';
import {styles} from './styles';
import SVG from '../../../Utils/Assets/Svg';
import AFAuthScreenTitle from '../../../Components/AFAuthScreenTitle';
import STRINGS from '../../../Utils/Constants/String';
import ActivityButton from '../../../Components/AFActivityButton';
import AFButton from '../../../Components/AFButton';
import {getWidthBasedDimension} from '../../../Utils/Responsive/Responsive';
import { GENDER_INFO } from '../../../Navigator/AuthenticationNavigator/AuthenticationNavigator';

const ActiveScreen = ({navigation}: any) => {
  const [selectActive, setSelectActive] = useState('Beginner');
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const _backPress = () => {
    navigation.goBack();
  };

  const _activeNextPress = () => {
    navigation.navigate(GENDER_INFO);
  };

  // const handleActivityPress = (activity: string) => {
  //   setSelectActive(activity);
  // };

  // const handleActivityPress = (activity: string) => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 500,
  //     easing: Easing.linear,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     setSelectActive(activity);
  //     Animated.timing(fadeAnim, {
  //       toValue: 1,
  //       duration: 500,
  //       easing: Easing.linear,
  //       useNativeDriver: true,
  //     }).start();
  //   });

  //   Animated.timing(slideAnim, {
  //     toValue: 1,
  //     duration: 1000,
  //     easing: Easing.linear,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     slideAnim.setValue(0);
  //   });
  // };


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
          <AFBackButton onPress={_backPress} transparent/>
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
            {selectActive === 'Beginner' && (
              <View style={[styles.svgView, {paddingRight: 5}]}>
                <SVG.BEGINNER width={getWidthBasedDimension() / 1.1} />
              </View>
            )}
            {selectActive === 'Intermediate' && (
              <View style={styles.svgView}>
                <SVG.INTERMEDIATE width={getWidthBasedDimension() / 1.1} />
              </View>
            )}
            {selectActive === 'Advance' && (
              <View style={styles.svgView}>
                <SVG.ADVANCED />
              </View>
            )}
          </Animated.View>
        </View>

        <AFAuthScreenTitle
          title={STRINGS.active.youAre}
          otherStyle={{width: '18%', marginBottom: 5}}
        />
        <View style={styles.buttonView}>
          <ActivityButton
            onPress={() => handleActivityPress('Beginner')}
            text={STRINGS.active.beginner}
            selectActivity={selectActive === 'Beginner'}
          />
          <ActivityButton
            onPress={() => handleActivityPress('Intermediate')}
            text={STRINGS.active.intermediate}
            selectActivity={selectActive === 'Intermediate'}
          />
          <ActivityButton
            onPress={() => handleActivityPress('Advance')}
            text={STRINGS.active.advance}
            selectActivity={selectActive === 'Advance'}
          />
        </View>
      </View>
      <AFButton buttonTitle={STRINGS.common.next} onPress={_activeNextPress} />
      <AFBottomSafeAreView />
    </>
  );
};

export default ActiveScreen;
