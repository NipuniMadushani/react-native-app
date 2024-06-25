import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {theme, Text} from '../../Theme/Theme';

interface AfToggleSwitchProps {
  toggleTextOne: String;
  toggleTextTwo: String;
  isEnabled : boolean;
  toggleSwitchOnPress: () => void;
}

const AFToggleASwitch: React.FC<AfToggleSwitchProps> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.toggle,
          props.isEnabled ? styles.activeToggle : styles.inactiveToggle,
        ]}
        onPress={props.toggleSwitchOnPress}>
        <Text variant="inter_Medium_12" color="white">
          {props.toggleTextOne}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toggle,
          !props.isEnabled ? styles.activeToggle : styles.inactiveToggle,
        ]}
        onPress={props.toggleSwitchOnPress}>
        <Text variant="inter_Medium_12" color="white">
          {props.toggleTextTwo}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AFToggleASwitch;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lime_green,
    width: '65%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  toggle: {
    width: '50%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
  },
  activeToggle: {
    backgroundColor: theme.colors.Rich_Black, // Active state color
  },
  inactiveToggle: {
    backgroundColor: theme.colors.lime_green, // Inactive state color
  },
});
