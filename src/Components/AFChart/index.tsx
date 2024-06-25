import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { theme } from "../../Theme/Theme";
import { fontPixel, screenWidth } from "../../Utils/Responsive/Responsive";
import { Text } from "../../Theme/Theme";
import { ptData } from "../../Utils/Constants/String";


interface AFCharProps {
  yAxixsLabel: string;
  xAxixsLabel: string;
}

const AFChart: React.FC<AFCharProps> = (props: any) => {
  const [selectedData, setSelectedData] = useState(ptData[0]);

  useEffect(() => {
    // This effect ensures that the selectedData state is set on initial render
    setSelectedData(ptData[0]);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.yAxisSides}>
        <Text
          variant="inter_Medium_12"
          color="Rich_Black"
          textAlign="center"
          style={{ transform: [{ rotate: "270deg" }] }}
        >
          {props.yAxixsLabel}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text variant="inter_Medium_12" color="Cool_Gray" textAlign="right">
            {"15 April - 21 April"}
          </Text>
          <LineChart
            areaChart
            data={ptData}
            width={screenWidth - 90}
            hideDataPoints
            spacing={10}
            curved
            color={theme.colors.lime_green}
            thickness={2}
            startFillColor={theme.colors.lime_green}
            endFillColor={theme.colors.Pale_Lime_Green}
            startOpacity={0.9}
            endOpacity={0.3}
            initialSpacing={0}
            noOfSections={10}
            maxValue={450}
            yAxisColor={theme.colors.Cool_Gray}
            xAxisColor={theme.colors.Cool_Gray}
            yAxisTextStyle={{ color: theme.colors.Cool_Gray }}
            hideRules={true}
            adjustToWidth={true}
            animateOnDataChange={true}
            pointerConfig={{
              showPointerStrip: true,
              persistPointer: true,
              initialPointerIndex: 0,
              pointerStripHeight: 130,
              pointerColor: theme.colors.lime_green,
              radius: 6,
              pointerLabelWidth: 100,
              pointerLabelHeight: 90,
              pointerLabelComponent: (items: any) => {
                setSelectedData(items[0]);
                return (
                  <View style={styles.pointerLabelView}>
                    <Text variant="inter_Medium_12" color="lime_green" textAlign="center">
                      {items[0].date}
                    </Text>

                    <Text  variant="Inter_SemiBold_12" color="Rich_Black" textAlign="center" fontSize={fontPixel(12.8)} >
                      {`${items[0].value}${" "}${"Excellent"}`}
                    </Text>
                  </View>
                );
              },
            }}
          />
          <View>
            <Text variant="inter_Medium_12" color="Rich_Black" textAlign="center">
              {props.xAxixsLabel}
            </Text>
          </View>
        </View>
        {/* {selectedData && (
          <View style={styles.selectedDataContainer}>
            <Text variant="inter_Medium_12" color="Rich_Black">
              Selected Date: {selectedData.date}
            </Text>
            <Text variant="inter_Medium_12" color="Rich_Black">
              Selected Value: {selectedData.value}
            </Text>
          </View>
        )} */}
      </View>
    </View>
  );
};

export default AFChart;

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 10,
    flex: 1,
  },
  pointerLabelView: {
    width: 150,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  mainContainer: {
    flexDirection: "row",
  },
  yAxisSides: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: -40,
    marginLeft: -50,
  },
  selectedDataContainer: {
    padding: 10,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
});
