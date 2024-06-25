import {Platform} from 'react-native';

/**
 * isIOS
 */
export const isIOS = () => {
  return Platform.OS === 'ios';
};

/**
 * isAndroid
 */
export const isAndroid = () => {
  return Platform.OS === 'android';
};
