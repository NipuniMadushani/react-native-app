import {isIOS} from '../Helper/VersionCheck';
// import FontSize from '@/Utils/FontSize/FontSize';
import {createBox, createText, useTheme as useReTheme} from '@shopify/restyle';
import { fontPixel } from '../Utils/Responsive/Responsive';

// const Inter_Bold = 'Inter-Bold';
// const Inter_ExtraBold = 'Inter-ExtraBold';
export const Inter_Medium = 'Inter-Medium';
export const Inter_Regular = 'Inter-Regular';
export const Inter_SemiBold = 'Inter-SemiBold';


export const theme = {
  colors: {
    lime_green: '#76C757',
    Pale_Lime_Green: '#E1FFD6',
    Rich_Black: '#212121',
    Cool_Gray: '#8D8D8D',
    white: '#FFFFFF',
    black: '#000000',
    Golden_yellow: '#FFC700',
  },
  
  spacing: {
    xxs: 3,
    xs: 6,
    s: 8,
    sm: 12,
    m: 17,
    ml: 20,
    l: 25,
    lm: 30,
    lxm: 35,
    xl: 40,
    xxl: 50,
  },

  // borderRadii: {
  //   s: 4,
  //   m: 10,
  //   l: 25,
  //   xl: 40,
  // },

  textVariants: {
    // Font Style Regular
    inter_Medium_12: {
      color: 'black',
      fontSize: fontPixel(12.2),
      fontFamily: Inter_Medium,
    },
    Inter_SemiBold_12: {
      color: 'black',
      fontSize: fontPixel(12),
      fontFamily: Inter_SemiBold,
      fontWeight : '600',
    },
    Inter_Regular_12: {
      color: 'black',
      fontSize: fontPixel(12),
      fontFamily: Inter_Regular,
    },
    inter_Medium_15: {
      color: 'black',
      fontSize: fontPixel(15),
      fontFamily: Inter_Medium,
    },
    inter_SemiBold_17: {
      color: 'black',
      fontSize: fontPixel(17),
      fontFamily: Inter_SemiBold,
    },
    inter_Medium_17: {
      color: 'black',
      fontSize: fontPixel(17),
      fontFamily: Inter_Medium,
    },
  },

  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
