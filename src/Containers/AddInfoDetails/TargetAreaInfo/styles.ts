import {StyleSheet} from 'react-native';
import {theme} from '../../../Theme/Theme';
import { getHeightBasedDimension,  getWidthBasedDimension,} from '../../../Utils/Responsive/Responsive';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  verticalView: {
    flex: 1,
    flexDirection: 'row',
  },
  activityButtonView: {
    justifyContent: 'space-evenly',
    flex: 1,
    paddingBottom: getHeightBasedDimension() / 40,
  },
  activityWidth: {
    width: getWidthBasedDimension() / 3,
  },
  categoryView: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-end',
  },
  bodyView: {
    alignSelf: 'center',
  },
});
