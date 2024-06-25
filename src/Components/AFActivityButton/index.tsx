import React from 'react';
import {TouchableOpacity, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Text, theme} from '../../Theme/Theme';
import { getWidthBasedDimension } from '../../Utils/Responsive/Responsive';

interface ActivityButtonProps {
  onPress: () => void;
  text: string;
  selectActivity : string;
  otherStyle : ViewStyle;
}

// const ActivityButton: React.FC<ActivityButtonProps> = ({onPress, text , otherStyle, selectActivity}) => {
const ActivityButton: React.FC<ActivityButtonProps> = (props) => {
    
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.touchbleView, { backgroundColor: props.selectActivity ? theme.colors.Rich_Black : theme.colors.Pale_Lime_Green, ...props.otherStyle}]}>
    <Text variant="Inter_Regular_12" style={{color: props.selectActivity ?  theme.colors.white : theme.colors.Rich_Black}}>
      {props.text}
    </Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchbleView: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: getWidthBasedDimension() / 2,
    marginTop: 20,
    borderColor: theme.colors.lime_green,
    backgroundColor: theme.colors.Pale_Lime_Green,
    borderWidth: 1,
    borderRadius: 8,
  },
  text : {
    color: theme.colors.Rich_Black
  }
});

export default ActivityButton;
