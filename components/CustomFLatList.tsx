import { FlatList, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { MonoText } from "./StyledText";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";

import VitalsSvg from "../assets/svg/activeTabIcon/vitals.svg";
import EyeSvg from "../assets/svg/eyeSvg.svg";

const DATA = [
  {
    id: "1",
    vitalCheckType: "Heart Rate",
    vitalData: "80 bpm",
    vitalDate: "24 July, 2022. 10:40pm",
  },
  {
    id: "2",
    vitalCheckType: "Eye Dilation",
    vitalData: "20 diameter",
    vitalDate: "19 July, 2022. 10:40pm",
  },
  {
    id: "3",
    vitalCheckType: "Heart Rate",
    vitalData: "70 bpm",
    vitalDate: "24 July, 2022. 10:40pm",
  },
  {
    id: "4",
    vitalCheckType: "Eye Dilation",
    vitalData: "10 diameter",
    vitalDate: "24 July, 2022. 10:40pm",
  },
  {
    id: "5",
    vitalCheckType: "Heart Rate",
    vitalData: "12 bpm",
    vitalDate: "24 July, 2022. 10:40pm",
  },
  {
    id: "6",
    vitalCheckType: "Heart Rate",
    vitalData: "90 bpm ",
    vitalDate: "24 July, 2022. 10:40pm",
  },
  {
    id: "7",
    vitalCheckType: "Eye Dilation",
    vitalData: "24 diameter",
    vitalDate: "24 July, 2022. 10:40pm",
  },
  {
    id: "8",
    vitalCheckType: "Heart Rate",
    vitalData: "77 bpm",
    vitalDate: "24 July, 2022. 10:40pm",
  },
  // Add more items as needed
];

export default function CustomFlatList() {
  const colorScheme = useColorScheme();

  const Item = ({
    vitalCheckType,
    vitalData,
    vitalDate,
  }: {
    vitalCheckType: string;
    vitalData: string;
    vitalDate: string;
  }) => (
    <View
      style={[
        styles.item,
        { borderColor: Colors[colorScheme ?? "light"].flatListBorderColor },
      ]}
    >
      <View style={styles.leftItem}>
        <View style={styles.leftItemIconData}>
          {vitalCheckType === "Heart Rate" && (
            <VitalsSvg width={24} height={24} />
          )}
          {vitalCheckType === "Eye Dilation" && (
            <EyeSvg width={24} height={24} />
          )}
          <MonoText style={styles.vitalCheckType}>{vitalCheckType}</MonoText>
        </View>
        <MonoText style={styles.vitalData}>{vitalData}</MonoText>
      </View>

      <View style={styles.rightItem}>
        <MonoText style={styles.vitalDate}>{vitalDate}</MonoText>
      </View>
    </View>
  );

  const renderItem = ({
    item,
  }: {
    item: {
      id: string;
      vitalCheckType: string;
      vitalData: string;
      vitalDate: string;
    };
  }) => (
    <>
      <Item
        vitalCheckType={item.vitalCheckType}
        vitalData={item.vitalData}
        vitalDate={item.vitalDate}
      />
      <View style={styles.separator} darkColor="#E6E6E6" />
    </>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
    />
  );
}

const styles = StyleSheet.create({
  item: {
    height: 75,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 16.5,
    borderRadius: 10,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  vitalCheckType: {
    fontSize: 14,
    fontWeight: "600",
    color: "#393938",
    marginLeft: 10,
  },
  separator: {
    height: 1,
  },
  vitalData: {
    fontSize: 16,
    fontWeight: "700",
    color: "#666666",
  },
  vitalDate: {
    fontSize: 10,
    fontWeight: "400",
  },
  leftItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 55,
  },
  rightItem: {
    alignSelf: "flex-end",
  },
  leftItemIconData: {
    display: "flex",
    flexDirection: "row",
  },
});
