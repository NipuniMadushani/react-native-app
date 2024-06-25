import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import { theme } from '../../Theme/Theme';
import SVG from '../../Utils/Assets/Svg';
import { getHeightBasedDimension } from '../../Utils/Responsive/Responsive';

interface AFArrowButtonProps extends TouchableOpacityProps {
  onPress: () => void;
}

const AFArrowButton: React.FC<AFArrowButtonProps> = ({ onPress, ...restProps }) => {
  return (
    <TouchableOpacity style={styles.arrowContainer} onPress={onPress} {...restProps}>
      <SVG.LARGE_ARROW/>
    </TouchableOpacity>
  );
};

export default AFArrowButton;

const styles = StyleSheet.create({
  arrowContainer : {
    backgroundColor: theme.colors.lime_green,
    // height: getHeightBasedDimension() / 12,
    // width: getHeightBasedDimension() / 11.6,
    height: 67,
    width: 70,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
