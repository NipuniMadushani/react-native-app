import React, { useState } from "react";
import { View, TouchableOpacity,  Image, FlatList, TextInput, } from "react-native";
import { styles } from "./styles";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import SVG from "../../../Utils/Assets/Svg";
import Assets from "../../../Utils/Assets/Assets";
import { Text, theme } from "../../../Theme/Theme";
import { messagesData } from "../../../Utils/Constants/String";

const ChatWithCouch = ({ navigation }: any) => {
  const [cancelReasonDetails, setCancelReasonDetails] = useState("");

  const _backPress = () => {
    navigation.goBack();
  };

  const _openCamera = () => {
    console.log("Open camera ...");
  };

  const _documentPress = () => {
    console.log("Document press ...");
  };

  const _onSend = () => {
    console.log("Send Message ...");
  };

  const _msgRender = ({ item }: any) => {
    return (
      <View style={styles.msgContainer}>
        <View style={item.selfMsg ? styles.rightContainer : styles.leftContainer}>
          <Text  variant="inter_Medium_12"  color="Cool_Gray"
            style={{
              color: item.selfMsg ? theme.colors.white : theme.colors.lime_green, }}
          >
            {item.selfMsg ? item.selfMsg : item.beauticianMsg}
          </Text>
        </View>
        <View
          style={[
            styles.timeView, { alignSelf: item.selfMsg ? "flex-end" : "flex-start" },
          ]}
        >
          {item.img && <Image source={item.img} />}
          <Text  variant="Inter_Regular_12" color="Cool_Gray"   style={styles.timeText} >
            {item.selfMsg ? item.selfTime : item.beauticianTime}
          </Text> 
        </View>
      </View>
    );
  };

  return (
    <>
      <AFSafeAreView />
      <View style={styles.backView}>
        <TouchableOpacity style={styles.arrowContainer} onPress={_backPress}>
          {<SVG.BACK_WHITE_ARROW />}
        </TouchableOpacity>
        <View style={styles.imgView}>
          <Image source={Assets.CouchProfile} style={styles.chatImg} />
        </View>
        <View style={styles.couchNameView}>
          <Text variant="inter_Medium_15" color="Rich_Black">
            {"Daniel Parker"}
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={[styles.root]}>
          <View style={{ backgroundColor: "transparent", flex: 1 }}>
            <FlatList
              data={messagesData?.reverse()}
              renderItem={_msgRender}
              inverted
            />
          </View>

          <View style={styles.rootView}>
            <View style={styles.txtinputView}>
              <View style={styles.emojiView}>
                <SVG.EMOJI />
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.root2}
                  value={cancelReasonDetails}
                  onChangeText={(cancelReasonDetails) =>
                    setCancelReasonDetails(cancelReasonDetails)
                  }
                  placeholder="Type a message..."
                  placeholderTextColor={theme.colors.Rich_Black}
                  multiline
                />
              </View>
              <TouchableOpacity
                style={[styles.btnView, { paddingRight: 10 }]}
                onPress={_documentPress}
              >
                <SVG.DOCUMENT />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnView} onPress={_openCamera}>
                <SVG.CAMERA />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={_onSend} style={styles.sendView}>
              <SVG.SEND />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default ChatWithCouch;
