import React from 'react';
import {View, Text} from 'react-native';
import {LogBox} from 'react-native';
import ApplicationNavigator from './src/Navigator/ApplicationNavigator';
import {ThemeProvider} from '@shopify/restyle';
import { theme } from './src/Theme/Theme';
// import { theme } from '@/Theme/Theme';

LogBox.ignoreLogs([
  'Warning: ...',
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

LogBox.ignoreAllLogs();
const App: React.FC = () => {
  return (
    <>
      <ThemeProvider {...{theme}}>
        <ApplicationNavigator />
      </ThemeProvider>
    </>
  );
};

export default App;
