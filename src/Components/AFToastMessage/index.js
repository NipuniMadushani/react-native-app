import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../Theme/Theme';

const { width } = Dimensions.get('window');

const toastTypes = {
  success: { icon: 'check-circle', backgroundColor: theme.colors.lime_green },
  error: { icon: 'error', backgroundColor: '#F44336' },
  info: { icon: 'info', backgroundColor: '#2196F3' },
  warning: { icon: 'warning', backgroundColor: theme.colors.Golden_Orange_Mixed_Yellow },
};

const ToastMessage = ({
  type = 'info',
  title,
  message,
  visible,
  animation,
  position = 'top-center',
}) => {
  const { icon, backgroundColor } = toastTypes[type];

  if (!visible) return null;

  const positionStyles = getPositionStyle(position, animation);

  return (
    <Animated.View style={[styles.toast, { backgroundColor }, positionStyles]}>
      <MaterialIcons name={icon} size={28} color="#fff" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
    </Animated.View>
  );
};

const getPositionStyle = (position, animation) => {
  const baseStyle = {
    transform: [{ translateY: animation }],
    position: 'absolute',
    zIndex: 999,
  };

  switch (position) {
    case 'top-left':
      return {
        ...baseStyle,
        top: 60,
        left: 20,
        alignSelf: 'flex-start',
      };
    case 'top-right':
      return {
        ...baseStyle,
        top: 60,
        right: 20,
        alignSelf: 'flex-end',
      };
    case 'bottom-left':
      return {
        ...baseStyle,
        bottom: 60,
        left: 20,
        alignSelf: 'flex-start',
      };
    case 'bottom-right':
      return {
        ...baseStyle,
        bottom: 60,
        right: 20,
        alignSelf: 'flex-end',
      };
    case 'bottom-center':
      return {
        ...baseStyle,
        bottom: 60,
        alignSelf: 'center',
      };
    case 'top-center':
    default:
      return {
        ...baseStyle,
        top: 60,
        alignSelf: 'center',
      };
  }
};

const styles = StyleSheet.create({
  toast: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    alignItems: 'flex-start',
    width: width * 0.9,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  icon: {
    marginRight: 12,
    marginTop: 3,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  message: {
    color: '#f0f0f0',
    fontSize: 14,
  },
});

export default ToastMessage;
