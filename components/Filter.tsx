import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { View } from "@/components/Themed";
import { MonoText } from "./StyledText";
import CloseIcon from "../assets/svg/closeIcon.svg";
import UnSelectedCheckBoxIcon from "../assets/svg/unSelectedCheckBoxIcon.svg";
import SelectedCheckBoxIcon from "../assets/svg/selectedCheckBoxIcon.svg";
import DisabledCheckBoxIcon from "../assets/svg/disabledCheckBoxIcon.svg";
import AsterikIcon from "../assets/svg/asterik.svg";
import Colors from "@/constants/Colors";
import ButtonPrimaryDisabled from "./Buttons/ButtonPrimaryDisabled";
import ButtonSecondaryDisabled from "./Buttons/ButtonSecondaryDisabled";
import CustomCalendarButton from "../components/CustomCalenderButton";

interface FilterProps {
  closeBottomSheet: () => void;
}

const Filter: React.FC<FilterProps> = ({ closeBottomSheet }) => {
  const [dateRange, setDateRange] = useState<string>("");

  const onChangeInput = (inputRange: string) => {
    setDateRange(inputRange);
  };

  const handleCloseBottomSheet = () => {
    closeBottomSheet();
  };

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const allTypes = ["All Type", "Eye Dilation", "Heart Rate"];

  useEffect(() => {
    console.log("Selected Types:", selectedTypes);
  }, [selectedTypes]);

  const handleTransactionTypeSelect = (type: string) => {
    if (type === "All Type") {
      if (selectedTypes.includes("All Type")) {
        setSelectedTypes([]);
      } else {
        setSelectedTypes([type]);
      }
    } else {
      if (selectedTypes.includes("All Type")) {
        setSelectedTypes([type]);
      } else {
        const updatedSelectedTypes = selectedTypes.includes(type)
          ? selectedTypes.filter((selectedType) => selectedType !== type)
          : [...selectedTypes, type];
        setSelectedTypes(updatedSelectedTypes);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MonoText style={styles.filterHeading}>Filter</MonoText>
        <Pressable>
          <CloseIcon onPress={handleCloseBottomSheet} />
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.sectionTitle}>
          <MonoText style={styles.sectionHeading}>Transaction Type</MonoText>
          <AsterikIcon style={styles.asterikIcon} />
        </View>
        <View>
          {allTypes.map((type, index) => (
            <View key={type}>
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleTransactionTypeSelect(type)}
                disabled={
                  type !== "All Type" && selectedTypes.includes("All Type")
                }
              >
                {selectedTypes.includes(type) ? (
                  <SelectedCheckBoxIcon style={styles.icon} />
                ) : type === "All Type" &&
                  selectedTypes.includes("All Type") ? (
                  <SelectedCheckBoxIcon style={styles.icon} />
                ) : type === "All Type" &&
                  !selectedTypes.includes("All Type") ? (
                  <UnSelectedCheckBoxIcon style={styles.icon} />
                ) : selectedTypes.includes("All Type") ? (
                  <DisabledCheckBoxIcon />
                ) : (
                  <UnSelectedCheckBoxIcon style={styles.icon} />
                )}
                <MonoText>{type}</MonoText>
              </TouchableOpacity>
              {index !== allTypes.length - 1 && (
                <View style={styles.separator} darkColor="#E6E6E6" />
              )}
            </View>
          ))}
        </View>
      </View>

      <View>
        <View style={styles.sectionTitle}>
          <MonoText style={styles.sectionHeading}>
            Transaction date Range
          </MonoText>
          <AsterikIcon style={styles.asterikIcon} />
        </View>

        <View style={styles.dateRange}>
          <MonoText style={{ color: Colors.light.searchBarText }}>
            MM/DD/YY
          </MonoText>
          <CustomCalendarButton />
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonPrimaryDisabled title="Apply Filter" />
        <ButtonSecondaryDisabled title="Clear Filter" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  filterHeading: {
    fontWeight: "700",
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
  },
  sectionHeading: {
    fontWeight: "400",
    fontSize: 14,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    marginBottom: 8,
  },
  icon: {
    marginHorizontal: 12,
  },
  dateRange: {
    height: 56,
    borderWidth: 1,
    borderColor: Colors.light.borderColor,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    fontWeight: "400",
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    marginVertical: 8,
  },
  separator: {
    height: 1,
    marginHorizontal: 16,
  },
  asterikIcon: {
    marginTop: 4,
    marginLeft: 8,
  },
});

export default Filter;
