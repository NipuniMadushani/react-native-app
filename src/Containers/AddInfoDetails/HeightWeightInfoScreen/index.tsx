import React, { useState } from "react";
import { View, Text, Button, Modal } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AFBackButton from "../../../Components/AFBackButton";
import { styles } from "./styles";
import SVG from "../../../Utils/Assets/Svg";
import { getHeightBasedDimension, getWidthBasedDimension} from "../../../Utils/Responsive/Responsive";
import AFButton from "../../../Components/AFButton";
import AFToggleASwitch from "../../../Components/AFToggleSwitch";
import AFTitleValueBox from "../../../Components/AFTitleValueBox";
import STRINGS from "../../../Utils/Constants/String";
import AfModal from "../../../Components/AFModal";
import AFRulerPicker from "../../../Components/AFRulerPicker";
import { SUBSCRIPTION_SCREEN } from "../../../Navigator/AuthenticationNavigator/AuthenticationNavigator";

const HeightWeightInfo = ({ navigation }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isToggle, setIsToggle] = useState(true);
  const [heightValue, setHeightValue] = useState("");

  const cmKg = STRINGS.heightWeight.cmkg;
  const ftLb = STRINGS.heightWeight.ftlb;

  const _backPress = () => {
    navigation.goBack();
  };

  const _heightWeightOnPress = () => {
    navigation.navigate(SUBSCRIPTION_SCREEN);
  };

  const _toggleSWitch = (value: any) => {
    setIsToggle(!isToggle);
  };

  const _showModal = (value: any) => {
    setIsModalVisible(value);
  };

  const _heightHandleValue = (value: any) => {
    setHeightValue(value);
  };

  return (
    <>
      <AFSafeAreView />
      <AFBackButton onPress={_backPress} />
      <View style={styles.container}>
        <View style={styles.imgView}>
          <SVG.HEIGHT_WEIGHT
            width={getWidthBasedDimension() / 1}
            height={getWidthBasedDimension() / 1.6}
          />
        </View>
        {/* <AFRulerPicker /> */}
        <View style={{ height: getHeightBasedDimension() / 25 }}></View>
        <AFToggleASwitch
          toggleTextOne={cmKg}
          toggleTextTwo={ftLb}
          toggleSwitchOnPress={() => _toggleSWitch(cmKg)}
          isEnabled={isToggle}
        />

        <View style={{ height: getHeightBasedDimension() / 50 }}></View>
        <View style={styles.titiValueView}>
          <AFTitleValueBox
            title={STRINGS.heightWeight.height}
            pickerTitle={STRINGS.heightWeight.heightFt}
            number={"5.8"}
            _openPressModal={() => _showModal(1)}
          />
          <AFTitleValueBox
            title={STRINGS.heightWeight.weight}
            pickerTitle={STRINGS.heightWeight.weightLbs}
            number={"154"}
            _openPressModal={() => _showModal(2)}
          />
          <AFTitleValueBox
            title={STRINGS.heightWeight.targetWeight}
            pickerTitle={STRINGS.heightWeight.targetWeightIbs}
            number={"134"}
            _openPressModal={() => _showModal(3)}
          />
        </View>
      </View>
      <AFButton
        buttonTitle={STRINGS.common.next}
        onPress={() => _heightWeightOnPress()}
      />
      <AfModal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        otherModalContent={{ alignItems: "center" , paddingBottom : 0  }}
        modalContent={
          <>
            {isModalVisible == 1 && (
              <AFRulerPicker
                max={50}
                initialValue={isToggle == true ? 21 : 22.1}
                // unit={isToggle == true ? "cm" : "ft"}
                onValueChange={_heightHandleValue}
                fractionDigits={isToggle == true ? 0 : 1}
                pickerTitle={isToggle == true ? STRINGS.heightWeight.heightCm : STRINGS.heightWeight.heightFt}
                step={isToggle == true ? 1 : 0.1}
              />
            )}
            {isModalVisible == 2 && (
              <AFRulerPicker
                max={50}
                initialValue={isToggle == true ? 21 : 22.1}
                // unit={isToggle == true ? "kg" : "lbs"}
                onValueChange={_heightHandleValue}
                fractionDigits={isToggle == true ? 0 : 1}
                pickerTitle={isToggle == true ? STRINGS.heightWeight.weightKg : STRINGS.heightWeight.weightLbs}
                step={isToggle == true ? 1 : 0.1}
              />
            )}
            {isModalVisible == 3 && (
              <AFRulerPicker
                max={50}
                initialValue={isToggle == true ? 21 : 22.1}
                // unit={isToggle == true ? "kg" : "lbs"}
                onValueChange={_heightHandleValue}
                fractionDigits={isToggle == true ? 0 : 1}
                pickerTitle={isToggle == true ? STRINGS.heightWeight.targetWeightKg : STRINGS.heightWeight.targetWeightIbs}
                step={isToggle == true ? 1 : 0.1}
              />
            )}
          </>
        }
      />
      <AFBottomSafeAreView />
    </>
  );
};

export default HeightWeightInfo;
