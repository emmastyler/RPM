import { Pressable, StyleSheet } from "react-native";

import GlobalText from "@/components/GlobalText";
import { View } from "@/components/Themed";
import { MonoText } from "../../components/StyledText";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";

import NoVitalsSvg from "../../assets/svg/noVitalsSvg.svg";
import SearchBarSvg from "../../assets/svg/searchBarSvg.svg";
import CustomFlatList from "@/components/CustomFLatList";
import CustomBottomSheet from "@/components/CustomBottomSheet";

const VitalsScreen = () => {
  const globalTextContent: string =
    "You haven't done any vitals check. Vitals conducted will be displayed here.";
  const globalTextHeading: string = "No Vitals";
  const vitals: boolean = true;

  const colorScheme = useColorScheme();

  return (
    <>
      {!vitals && (
        <View style={styles.noVitalsContainer}>
          <View style={styles.svgContainer}>
            <NoVitalsSvg width={140} height={140} />
          </View>
          <GlobalText content={globalTextContent} heading={globalTextHeading} />
        </View>
      )}
      {vitals && (
        <View style={styles.vitalsContainer}>
          <View
            style={[
              styles.searchBarContainer,
              {
                borderColor: Colors[colorScheme ?? "light"].borderColor,
                backgroundColor:
                  Colors[colorScheme ?? "light"].searchBarBgColor,
              },
            ]}
          >
            <SearchBarSvg />
            <MonoText
              style={[
                styles.searchBarText,
                { color: Colors[colorScheme ?? "light"].searchBarText },
              ]}
            >
              Search by doctor's NAME or ID
            </MonoText>
            <CustomBottomSheet />
          </View>
          <CustomFlatList />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  noVitalsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  vitalsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 4,
  },
  svgContainer: {
    height: 162,
  },
  searchBarContainer: {
    height: 46,
    borderRadius: 15,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 11,
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBarText: {
    flex: 0.95,
    fontSize: 14,
    fontWeight: "400",
  },
});
export default VitalsScreen;
