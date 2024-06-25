import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {theme} from '../../Theme/Theme';

interface StatusBarProps {
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

const AFStatusBar: React.FC<StatusBarProps> = ({
  backgroundColor = theme.colors.Rich_Black,
  barStyle = 'light-content',
}) => {
  return <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />;
};

export default AFStatusBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
