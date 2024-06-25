import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Text, theme , ViewStyle} from '../../Theme/Theme';
import { fontPixel } from '../../Utils/Responsive/Responsive';

interface AfAuthScreenTitleProp {
  title: string;
  otherStyle: ViewStyle;
}

const AFAuthScreenTitle: React.FC<AfAuthScreenTitleProp> = props => {
  return (
    <View style={styles.container}>
      <Text variant="inter_SemiBold_17" color="white" style={styles.titleText}>{props.title}</Text>
      <View style={[styles.line , {...props.otherStyle}]}></View>
    </View>
  );
};

export default AFAuthScreenTitle;

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: theme.colors.Rich_Black,
  },
  line: {
    borderBottomColor: theme.colors.lime_green, // Color of the line
    borderBottomWidth: 5, // Thickness of the line
    width: '40%', // Adjust the width of the line as needed
    borderRadius: 15,
    marginTop: 3,
  }
});
