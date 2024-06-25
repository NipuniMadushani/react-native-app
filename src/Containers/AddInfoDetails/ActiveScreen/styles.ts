import {StyleSheet} from 'react-native';
import {theme} from '../../../Theme/Theme';
import {getHeightBasedDimension} from '../../../Utils/Responsive/Responsive';
import { isIOS } from '../../../Helper/VersionCheck';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: isIOS() ? -30 : -15,
    zIndex: 9,
  },
  buttonView: {
    alignSelf: 'center',
  },
  svgView: {
    // backgroundColor: 'red',
  },
  imageContainer: {
    // backgroundColor: 'red',
  },
});
