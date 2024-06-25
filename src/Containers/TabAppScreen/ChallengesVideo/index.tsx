import React, { useState } from "react";
import { View, Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import AFSafeAreView from "../../../Components/AFSafeAreaView";
import AFBottomSafeAreView from "../../../Components/AFBottomSafeAreaView";
import Assets from "../../../Utils/Assets/Assets";
import { styles } from "./styles";
import AFBackButton from "../../../Components/AFBackButton";
import AFBox from "../../../Components/AFBox";
import SVG from "../../../Utils/Assets/Svg";
import { Text, theme } from "../../../Theme/Theme";
import STRINGS from "../../../Utils/Constants/String";
import AFSeeAllTitle from "../../../Components/AFSellAllTitle";
import AFButton from "../../../Components/AFButton";
import AFTimeBurnView from "../../../Components/AFTimeBurnRound";
import { HOME_MAIN_TAB } from "../../../Navigator/HomeNavigator/HomeNavigator";

const ChallengesVideo = ({ navigation }: any) => {
  const [like, setLike] = useState(false);
  const [playPauses, setPlayPauses] = useState(true);
  const [saveNote, setSaveNote] = useState(false);

  const _backPress = () => {
    navigation.goBack();
  };

  const _toggleLikePress = () => {
    setLike(!like);
  };

  const _saveNotePress = () => {
    setSaveNote(!saveNote)
  };

  const _notePress = () => {
    console.log('saveNote' , saveNote);
    setSaveNote(false)
  };

  const _playPausesPress = () => {
    setPlayPauses(!playPauses)
  };

  return (
    <>
      <AFSafeAreView />
      <View style={styles.container}>
        <View style={styles.imgBack}>
          <Image source={Assets.WarmUpVideo} style={styles.video} />
          <View style={styles.backPositionView}>
            <View style={{ flex: 1 }}>
              <AFBackButton
                transparent
                White
                title={"Cardiovascular Warm-Up"}
                onPress={_backPress}
              />
            </View>
            <View style={styles.likeView}>
              <AFBox icon={like ? <SVG.HEART /> : <SVG.HEART_OUTLINE />} onPress={_toggleLikePress} />
            </View>
          </View>
          <TouchableOpacity style={styles.playPausesView} onPress={_playPausesPress}>
            {playPauses ? <SVG.PLAY /> : <SVG.PAUSES />}
          </TouchableOpacity>

          <AFTimeBurnView otherStyle={styles.calView} />

          {saveNote == true && <View style={styles.noteView} >
            <AFBox icon={<SVG.NOTE />} onPress={_notePress}/>
          </View>}
        </View>

        <ScrollView style={styles.scrollcontainer}>
          <AFSeeAllTitle title={STRINGS.videoScreen.aboutExe} />
          <Text variant="inter_Medium_12" color="Cool_Gray"  lineHeight={19} style={{ marginVertical: 7 }}  >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut...."
            }
          </Text>
          {!saveNote === true && <AFSeeAllTitle title={STRINGS.videoScreen.writeNote} />}
          {!saveNote === true && <TextInput
            multiline
            style={styles.inputView}
            placeholder="Enter note..."
            placeholderTextColor={theme.colors.Cool_Gray}
            textAlignVertical="top"
          />}
          
        </ScrollView>
      </View>

      <AFButton buttonTitle={STRINGS.videoScreen.saveNote} onPress={_saveNotePress}/>

      <AFBottomSafeAreView />
    </>
  );
};

export default ChallengesVideo;
