import {StyleSheet} from 'react-native';
import {theme} from '../../../Theme/Theme';
import { getWidthBasedDimension } from '../../../Utils/Responsive/Responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  imgView: {
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -13,
  },
  titiValueView: {
    paddingHorizontal: getWidthBasedDimension() / 15,
  }, 
  centeredView: {
    flex:1, backgroundColor:"red"
  }
});
