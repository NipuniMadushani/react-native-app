import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AFBackButton from "../../../Components/AFBackButton";
import STRINGS from "../../../Utils/Constants/String";
import { theme } from "../../../Theme/Theme";
import { styles } from "./styles";
import Assets from "../../../Utils/Assets/Assets";
import SVG from "../../../Utils/Assets/Svg";
import AFProfileNameBox from "../../../Components/AFProfileNameBox";
import AFTextInput from "../../../Components/AFTextInput";
import { getHeightBasedDimension } from "../../../Utils/Responsive/Responsive";
import AFRulerPicker from "../../../Components/AFRulerPicker";
import AFTitleValueBox from "../../../Components/AFTitleValueBox";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import AfModal from "../../../Components/AFModal";

const EditProfile = ({ navigation }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [heightValue, setHeightValue] = useState("");
  const [isToggle, setIsToggle] = useState(true);

  const _backPress = () => {
    navigation.goBack("");
  };

  const _editProfile = () => {};


  const _showModal = (value: any) => {
    setIsModalVisible(value);
  };

  const _heightHandleValue = (value: any) => {
    setHeightValue(value);
  };


  return (
    <>
      <AFSafeAreView />
      <AFBackButton title={STRINGS.editProfile.tile} onPress={_backPress} />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImgView}>
            <Image source={Assets.Profile} style={styles.img} />
            <TouchableOpacity style={styles.editView} onPress={_editProfile}>
              <SVG.EDIT />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textInputView}>
          {/* <AFProfileNameBox /> */}
          <AFTextInput placeholder={STRINGS.editProfile.fName} blackText otherStyle={{height: 48, marginTop : 15,}}/>
          <AFTextInput placeholder={STRINGS.editProfile.lName} blackText otherStyle={{height: 48, marginTop : 15,}}/>
          <AFTextInput placeholder={STRINGS.editProfile.gender} blackText otherStyle={{height: 48, marginTop : 15,}}/>
          <AFTitleValueBox
            title={STRINGS.editProfile.height}
            pickerTitle={STRINGS.heightWeight.targetWeightIbs}
            number={"134"}
            unit={"ft"}
            _openPressModal={() => _showModal(1)}
          />
          <AFTitleValueBox
            title={STRINGS.editProfile.weight}
            pickerTitle={STRINGS.heightWeight.targetWeightIbs}
            number={"134"}
            unit={"lbs"}
            _openPressModal={() => _showModal(2)}
          />
        </View>
        
      </View>

      <AfModal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        otherModalContent={{alignItems: "center" , paddingBottom : 0}}
        modalContent={
          <>
            {isModalVisible == 1 && (
              <AFRulerPicker
                max={50}
                initialValue={21.1}
                unit={ ""}
                onValueChange={_heightHandleValue}
                fractionDigits={1}
                pickerTitle={STRINGS.heightWeight.heightFt}
                step={0.1}
              />
            )}
            {isModalVisible == 2 && (
              <AFRulerPicker
                max={50}
                initialValue={21.1}
                unit={""}
                onValueChange={_heightHandleValue}
                fractionDigits={1}
                pickerTitle={STRINGS.heightWeight.weightLbs}
                step={0.1}
              />
            )}
          </>
        }
      />
      <AFBottomSafeAreView />
    </>
  );
};

export default EditProfile;
