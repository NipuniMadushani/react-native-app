import React from 'react';
import {View, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {theme} from '../../Theme/Theme';
import {getHeightBasedDimension} from '../../Utils/Responsive/Responsive';
import {Text} from '../../Theme/Theme';
import { isAndroid } from '../../Helper/VersionCheck';

interface ButtonProps {
  onPress: () => void;
  buttonTitle: string;
  otherStyle: ViewStyle;
  transparent: ViewStyle;
}

const AFButton: React.FC<ButtonProps> = props => {
  return (
    <View style={{ backgroundColor: props.transparent ? 'transparent' :  theme.colors.white}}>
      <TouchableOpacity style={[styles.container , {...props.otherStyle}]} onPress={props.onPress}>
        <Text variant="Inter_SemiBold_12" color="black" textAlign="right">
          {props.buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AFButton;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lime_green,
    height: getHeightBasedDimension() / 19,
    alignSelf: 'center',
    width: '90%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: isAndroid() ?  20 : 0,
  },
});
