import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme, Text } from "../../Theme/Theme";
import AFBottomSafeAreView from "../../Components/AFBottomSafeAreaView";
import AFSafeAreView from "../../Components/AFSafeAreaView";
import STRINGS from "../../Utils/Constants/String";
import { fontPixel } from "../../Utils/Responsive/Responsive";
// tab svg
import SVG from "../../Utils/Assets/Svg";
// Screens
import PlanTab from "../../Containers/TabAppScreen/PlanTab";
import HomeTab from "../../Containers/TabAppScreen/HomeTab";
import ProfileTab from "../../Containers/TabAppScreen/ProfileTab";
import AnalysisTab from "../../Containers/TabAppScreen/AnalysisTab";
import GpsTab from "../../Containers/TabAppScreen/GpsTab";
import { isAndroid } from "../../Helper/VersionCheck";


export const HOME_TAB = "Home";
export const PLAN_TAB = "Plan";
export const GPS_TAB = "GpsTab";
export const ANALYSIS_TAB = "Analysis";
export const PROFILE_TAB = "Profile";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <>
      <AFSafeAreView />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            width: "93%",
            height: 55,
            position: "absolute",
            left: "3.5%",
            bottom: isAndroid() ? 0 : -5,
            borderRadius: 15,
            // borderTopWidth: 0,
            backgroundColor: theme.colors.Rich_Black,
            paddingBottom: 5,
            paddingTop: 5,
            // zIndex: 9,
            alignSelf: "center",
            marginVertical: 10,
          },
        }}
        tabBarOptions={{
          showLabel: true,
          activeTintColor: theme.colors.lime_green,
          inactiveTintColor: theme.colors.white,
          labelStyle: {
            fontSize: fontPixel(10),
          },
          tabStyle: {
            justifyContent: "center",
            alignItems: "center",
            display : 'flex'
          },
          style: {},
        }}
      >
        <Tab.Screen
          name={HOME_TAB}
          component={HomeTab}
          options={{
            lazy: true,
            tabBarIcon: ({ focused }) =>
              focused ? <SVG.HOME_ACTIVE /> : <SVG.HOME_IN_ACTIVE />,
          }}
        />
        <Tab.Screen
          name={PLAN_TAB}
          component={PlanTab}
          options={{
            lazy: true,
            tabBarIcon: ({ focused }) =>
              focused ? <SVG.PLAN_ACTIVE /> : <SVG.PLAN_IN_ACTIVE />,
          }}
        />
        <Tab.Screen
          name={GPS_TAB}
          component={GpsTab}
          options={{
            lazy: true,
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.gpsContainer}>
                  <View
                    style={[
                      styles.gpsView,
                      {
                        borderColor: focused ? theme.colors.Rich_Black : null,
                        borderWidth: focused ? 2 : 0,
                      },
                    ]}
                  >
                    <Text
                      variant="Inter_SemiBold_12"
                      color="black"
                      style={[
                        styles.gpsText,
                        { transform: [{ rotate: "-40deg" }] },
                      ]}
                    >
                      {STRINGS.HomeTab.gps}
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={ANALYSIS_TAB}
          component={AnalysisTab}
          options={{
            lazy: true,
            tabBarIcon: ({ focused }) =>
              focused ? <SVG.ANALYSIS_ACTIVE /> : <SVG.ANALYSIS_IN_ACTIVE />,
          }}
        />
        <Tab.Screen
          name={PROFILE_TAB}
          component={ProfileTab}
          options={{
            lazy: true,
            tabBarIcon: ({ focused }) =>
              focused ? <SVG.PROFILE_ACTIVE /> : <SVG.PROFILE_IN_ACTIVE />,
          }}
        />
      </Tab.Navigator>
      <AFBottomSafeAreView />
    </>
  );
};

export default MainTab;

export const styles = StyleSheet.create({
  gpsText: {
    fontSize: fontPixel(11),
    color: theme.colors.Rich_Black,
  },
  gpsContainer: {
    backgroundColor: theme.colors.white,
    height: 69,
    width: 69,
    position: "absolute",
    bottom: 0,
    transform: [{ rotateX: "10deg" }, { rotateZ: "45deg" }],
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.white,
    borderRadius: 8,
  },
  gpsView: {
    backgroundColor: theme.colors.lime_green,
    height: 58,
    width: 58,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor:theme.colors.Rich_Black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 9,
  },
});
