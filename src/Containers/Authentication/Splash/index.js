import {View, Text, Image} from 'react-native';
import React, { useEffect } from 'react';
import {styles} from './styles';
import SVG from '../../../Utils/Assets/Svg';
import { ONBOARDING } from '../../../Navigator/AuthenticationNavigator/AuthenticationNavigator';

import Assets from '../../../Utils/Assets/Assets';
import OnBoardingScreen from '../OnBoarding';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ONBOARDING);
    }, 3000);
  })
  return (
    <>
      <View style={styles.container}>
         <Image source={Assets.SplashScreen}  resizeMode="contain" style={styles.image} />
        {/* <SVG.APP_LOGO /> */}
      </View>
    </>
  );
};

export default SplashScreen;
