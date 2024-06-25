import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Assets from '../../Utils/Assets/Assets';
import SVG from '../../Utils/Assets/Svg';
import AFBackButton from '../AFBackButton';
import { theme } from '../../Theme/Theme';
import { getHeightBasedDimension } from '../../Utils/Responsive/Responsive';
import { isAndroid, isIOS } from '../../Helper/VersionCheck';

const AFAuthBackView = (props : any) => {
  return (
    <View style={styles.container}>
      <View style={styles.backRoundView}>
        <Image source={Assets.BackRound} style={styles.backImg}/>
        <View style={styles.backButtonView}>
          <AFBackButton onPress={props.onPress} transparent/>
        </View>
        <View style={styles.authLogoView}>
          <SVG.AUTH_LOGO />
        </View>
      </View>

      <View style={styles.boxContainer}>
        {props.childrenComponent}
      </View>
    </View>
  );
};

export default AFAuthBackView;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 2.5,
  },
  backRoundView: {
    justifyContent: 'center',
  },
  backButtonView: {
    position: 'absolute',
    top: isAndroid() ? 0 : 0,
    left: 10,
    width: '100%',
  },
  authLogoView: {
    position: 'absolute',
    alignSelf: 'center',
    top: isIOS() ? 50 : 90,
  },
  boxContainer: {
    backgroundColor: theme.colors.white,
    paddingTop: getHeightBasedDimension() / 20,
    paddingHorizontal: 17,
    borderRadius: 35,
    shadowColor: 'rgba(0,0,0,0.7)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.30,
    shadowRadius: 3.84,
    elevation: 4,
    position: 'absolute',
    top: isIOS() ?  getHeightBasedDimension() / 4 : getHeightBasedDimension() / 3,
    width: '90%',
    alignSelf: 'center',
    paddingBottom: getHeightBasedDimension() / 25,
  },
  backImg: {}
});
