import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../Theme/Theme';
import { isIOS } from '../../../Helper/VersionCheck';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.Rich_Black,
    justifyContent: 'center',
    alignItems: 'center',
  },
   image: {
    marginTop: isIOS() ? -22 : -10.9,
    width: width ,       
    height: height ,    
    resizeMode: 'contain',   
  },
});
