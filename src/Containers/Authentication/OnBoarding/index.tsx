import React, {useState} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import AFSafeAreView from '../../../Components/AFSafeAreaView';
import AFBottomSafeAreView from '../../../Components/AFBottomSafeAreaView';
import Assets from '../../../Utils/Assets/Assets';
import {styles} from './styles';
import { theme } from '../../../Theme/Theme';
import AFArrowButton from '../../../Components/AFArrowButton';
import AFBackButton from '../../../Components/AFBackButton';
import { LOGIN_SIGHUP, ONBOARDING } from '../../../Navigator/AuthenticationNavigator/AuthenticationNavigator';

const onBoardPages = [
  {
    id: 1,
    image: Assets.onBoardOne,
    title: 'Your Personalized Fitness Journey Begins Here',
    subtitle:
      'Embark on this journey with determination, knowing that every step forward is a step toward a healthier, happier you',
  },
  {
    id: 2,
    image: Assets.onBoardTwo,
    title: 'Transform Your Body, Transform Your Life ',
    subtitle:
      'Join us on this journey to unlock your full potential and transform your body and life for the better.',
  },
  {
    id: 3,
    image: Assets.onBoardThree,
    title: 'Unlock Your Potential, One Workout at a Time',
    subtitle:
      'That each workout is a step towards realizing one full potential',
  },
];

const OnBoardingScreen = ({navigation} : any) => {
  const [screen, setScreen] = useState(0);

  const SCREEN_WIDTH = Dimensions.get("window").width;
  const onMomentumScrollEnd = (event : any) => {
    const offset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offset / SCREEN_WIDTH);
    setScreen(currentIndex);
  };


  const _onBoardRenderItem = () => {
    return (
      <View style={styles.renderItemContainer}>
        <View style={styles.image}>
          <Image source={onBoardPages[screen].image} style={styles.img} />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{onBoardPages[screen].title}</Text>
          </View>

          <View style={styles.descriptionView}>
            <Text style={styles.description}>{onBoardPages[screen].subtitle}</Text>
          </View>
        </View>
      </View>
    );
  };


  const _arrowOnPress = () => {
    if (screen === 0) {
      setScreen(1);
    } else if (screen === 1) {
      setScreen(2);
    } else {
      navigation.navigate(LOGIN_SIGHUP);
    }
  }


  const _backOnPress = () => {
    if (screen === 0) {
      navigation.navigate(ONBOARDING);
    } else if (screen === 1) {
      setScreen(0);
    } else {
      setScreen(1);
    }
  }


  return (
    <>
      <AFSafeAreView />
      <View style={styles.viewContainer}>
        <FlatList
          data={onBoardPages}
          renderItem={_onBoardRenderItem}
          pagingEnabled={true}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onMomentumScrollEnd}
        />
        <View style={styles.backButtonView}>
          <AFBackButton onPress={() => _backOnPress()} transparent/>
        </View>
      <View style={styles.bottomContainer}>
        <View style={styles.dotContainer}>
          {onBoardPages.map((page, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor: screen === index ? theme.colors.lime_green : theme.colors.Rich_Black,
                },
              ]}
            ></View>
          ))}
        </View>
        <AFArrowButton onPress={() => _arrowOnPress()} />
      </View>
      </View>
      <AFBottomSafeAreView />
    </>
  );
};

export default OnBoardingScreen;
