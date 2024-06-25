import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {theme} from '../../Theme/Theme';

interface SafeAreaViewProps {
  backgroundColor?: string;
}

const AFSafeAreView: React.FC<SafeAreaViewProps> = ({
  backgroundColor = theme.colors.Rich_Black,
}) => {
  return <SafeAreaView style={{backgroundColor: backgroundColor}} />;
};

export default AFSafeAreView;
