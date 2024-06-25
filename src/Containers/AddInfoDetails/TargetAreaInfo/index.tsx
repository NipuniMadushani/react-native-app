import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import STRINGS from '../../../Utils/Constants/String';
import AFSafeAreView from '../../../Components/AFSafeAreaView';
import AFBottomSafeAreView from '../../../Components/AFBottomSafeAreaView';
import AFBackButton from '../../../Components/AFBackButton';
import AFButton from '../../../Components/AFButton';
import ActivityButton from '../../../Components/AFActivityButton';
import Assets from '../../../Utils/Assets/Assets';
import { HEIGHT_WEIGHT_INFO } from '../../../Navigator/AuthenticationNavigator/AuthenticationNavigator';

const TargetAreaInfo = ({navigation}: any) => {
  const [selectBodyPart, setSelectBodyPart] = useState('1');
  const _backPress = () => {
    navigation.goBack();
  };

  const _targetAreaOnPress = () => {
    navigation.navigate(HEIGHT_WEIGHT_INFO);
  };

  const bodyPress = (value : any) => {
    setSelectBodyPart(value);
  };

  return (
    <>
      <AFSafeAreView />
      <AFBackButton title={STRINGS.targetArea.title} onPress={_backPress} />
      <View style={styles.container}>
        <View style={styles.verticalView}>
          <View style={styles.activityButtonView}>
            <ActivityButton
              otherStyle={styles.activityWidth}
              text={STRINGS.targetArea.arm}
              onPress={() => bodyPress(1)}
              selectActivity={selectBodyPart == 1}
            />
            <ActivityButton
              otherStyle={styles.activityWidth}
              text={STRINGS.targetArea.abs}
              onPress={() => bodyPress(2)}
              selectActivity={selectBodyPart == 2}
            />
            <ActivityButton
              otherStyle={styles.activityWidth}
              text={STRINGS.targetArea.butt}
              onPress={() => bodyPress(3)}
              selectActivity={selectBodyPart == 3}
            />
            <ActivityButton
              otherStyle={styles.activityWidth}
              text={STRINGS.targetArea.leg}
              onPress={() => bodyPress(4)}
              selectActivity={selectBodyPart == 4}
            />
          </View>

          <View style={styles.categoryView}>
            {selectBodyPart == 1 && (
              <View style={styles.bodyView}>
                <Image source={Assets.arm}/>
              </View>
            )}
            {selectBodyPart == 2 && (
              <View style={styles.bodyView}>
                <Image source={Assets.abs}/>
              </View>
            )}
            {selectBodyPart == 3 && (
              <View style={styles.bodyView} >
                <Image source={Assets.butt}/>
              </View>
            )}
            {selectBodyPart == 4 && (
              <View style={styles.bodyView}>
                <Image source={Assets.leg}/>
              </View>
            )}
          </View>
        </View>
      </View>
      <AFButton
        buttonTitle={STRINGS.common.next}
        onPress={_targetAreaOnPress}
      />
      <AFBottomSafeAreView />
    </>
  );
};

export default TargetAreaInfo;
