import { Inter_Medium, theme } from "../Theme/Theme";
import { fontPixel } from "../Utils/Responsive/Responsive";
import { isAndroid } from "./VersionCheck";

export const calendarTheme = {
  calendarBackground: theme.colors.Rich_Black,
  textSectionTitleColor: theme.colors.lime_green,
  selectedDayTextColor: theme.colors.white,
  todayTextColor: theme.colors.white,
  dayTextColor: theme.colors.white,
  // textDisabledColor: "transparent",
  // selectedDotColor: "transparent",
  arrowColor: theme.colors.white,
  monthTextColor: theme.colors.lime_green,
  textDayFontFamily: Inter_Medium,
  textMonthFontWeight: "800",
  // textDayHeaderFontWeight: isAndroid() ? "700" : "400",
  textDayFontSize: fontPixel(10),
  textMonthFontSize: fontPixel(13),
  textDayHeaderFontSize: fontPixel(11),
  todayBackgroundColor: theme.colors.lime_green,
};

export const ChartConfig = {
  backgroundGradientFrom: 0,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  backgroundColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
  // strokeWidth: 2, // optional, default 3
};
