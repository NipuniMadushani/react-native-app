import React, {useState} from 'react';
import {color} from '@shopify/restyle';
import {Inter_Regular, theme} from '../../Theme/Theme';
import { fontPixel, getHeightBasedDimension, } from '../../Utils/Responsive/Responsive';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import SVG from '../../Utils/Assets/Svg';

interface IInputWithTitleProps extends TextInputProps {
  // Additional props specific to CustomInput
  onChangeText?: any;
  onBlur?: any;
  title?: string;
  placeholder?: string;
  withoutStar?: boolean;
  isPasswordField?: boolean;
  blackText?: boolean;
  customProp?: string;
  inputBoxStyle?: ViewStyle | TextInputProps;
  boxStyle?: ViewStyle;
  otherStyle?: ViewStyle;
  value?: any;
  icon?: any;
  secureTextEntry? : boolean,
}

const AFTextInput = ({
  onChangeText,
  onBlur,
  title,
  placeholder,
  withoutStar,
  isPasswordField,
  customProp,
  inputBoxStyle,
  value,
  icon,
  boxStyle,
  secureTextEntry,
  otherStyle,
  blackText,
  ...restProps
}: IInputWithTitleProps) => {
    const [isPasswordVisible, setPasswordVisible] = useState(secureTextEntry);

  const _eyeOnPress = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container , otherStyle]}>
      <TextInput
        style={[styles.inputView , {color : blackText ? theme.colors.Rich_Black : theme.colors.Cool_Gray}]}
        placeholder={placeholder ? placeholder : title}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={blackText ? theme.colors.Rich_Black : theme.colors.Cool_Gray}
        secureTextEntry={isPasswordVisible}
      />
      {secureTextEntry && (
          <TouchableOpacity  style={styles.eyeView} onPress={_eyeOnPress}>
            {isPasswordVisible ?  <SVG.EYE_CHECK /> : <SVG.EYE_OUTLINE/>}
          </TouchableOpacity>
        )}
    </View>
  );
};

export default AFTextInput;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Pale_Lime_Green,
    borderColor: theme.colors.lime_green,
    borderWidth: 0.7,
    borderRadius: 10,
    height: getHeightBasedDimension() / 19,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputView: {
    flex: 1,
    color: theme.colors.Cool_Gray,
    fontSize: fontPixel(11),
    fontFamily: Inter_Regular,
  },
  eyeView: {
    paddingLeft: 10,
  },
});
