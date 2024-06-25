import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { theme } from "../../Theme/Theme";

const AfModal = (props : any) => {
  return (
    <Modal
      isVisible={props.isVisible}
      backdropTransitionInTiming={100}
      animationInTiming={1000}
      animationOutTiming={700}
      onBackdropPress={props.onBackdropPress}
      style={{ margin: 0 }}
      // animationIn={"slideInUp"}
      // animationOut={"slideOutDown"}
    >
      <View style={[styles.modalContainer, { ...props.otherStyle }]}>
        <View style={[styles.modalContent , {...props.otherModalContent}]}>{props.modalContent}</View>
      </View>
    </Modal>
  );
};

export default AfModal;

export const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: theme.colors.Rich_Black,
    justifyContent: "center",
    // alignItems: "center",
    paddingTop: 25,
    borderRadius: 20,
    paddingBottom: 25,
  },
});
