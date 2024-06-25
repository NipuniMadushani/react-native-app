import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {styles} from './styles';
import SVG from '../../../Utils/Assets/Svg';
import { ONBOARDING } from '../../../Navigator/AuthenticationNavigator/AuthenticationNavigator';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ONBOARDING);
    }, 3000);
  })
  return (
    <>
      <View style={styles.container}>
        <SVG.APP_LOGO />
      </View>
    </>
  );
};

export default SplashScreen;
