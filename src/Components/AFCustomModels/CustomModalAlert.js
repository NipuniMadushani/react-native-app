import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { theme } from '../../Theme/Theme';

const { width } = Dimensions.get('window');

const CustomModalAlert = ({ visible, onClose, success = true, message }) => {
  const borderColor = success ? theme.colors.lime_green : theme.colors.Border_Color_Red;
  const titleColor = success ? theme.colors.lime_green : theme.colors.Title_Color_Red;
  const buttonColor = success ? theme.colors.lime_green : theme.colors.Button_Color_Red;

  return (
    <Modal
      isVisible={visible}
      animationIn="zoomIn"
      animationOut="zoomOut"
      backdropOpacity={0.6}
      onBackdropPress={onClose}
    >
      <View style={[styles.modalContainer, { borderColor }]}>
        <Text style={[styles.title, { color: titleColor }]}>
          {success ? 'Success' : 'Error'}
        </Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
          onPress={onClose}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: width * 0.85,
    backgroundColor: '#1C1C1E', // Slightly lighter than pure black
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: '#E0E0E0',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: theme.colors.black,
    fontSize: 16,
  },
});

export default CustomModalAlert;
