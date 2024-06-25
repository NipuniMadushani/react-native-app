import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticationNavigator from './AuthenticationNavigator/AuthenticationNavigator';
import HomeNavigator from './HomeNavigator/HomeNavigator';

export const AUTHENTICATION_NAVIGATOR = 'Authentication';
export const HOME_NAVIGATOR = 'HomeNavigator';

const Stack = createStackNavigator();
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={AUTHENTICATION_NAVIGATOR} component={AuthenticationNavigator}/>
          <Stack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
