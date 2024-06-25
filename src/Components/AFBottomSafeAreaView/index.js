import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { theme } from "../../Theme/Theme";

interface SafeAreaViewBottomProps {
  backgroundColor?: string;
}

const AFBottomSafeAreView: React.FC<SafeAreaViewBottomProps> = ({
  backgroundColor = theme.colors.white,
}) => {
  return <SafeAreaView style={{ backgroundColor: backgroundColor }} />;
};

export default AFBottomSafeAreView;
