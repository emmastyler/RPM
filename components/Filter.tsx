import { Platform, Pressable, StyleSheet, TextInput } from "react-native";
import { View } from "@/components/Themed";
import { MonoText } from "./StyledText";
import CloseIcon from "../assets/svg/closeIcon.svg";
import UnSelectedCheckBoxIcon from "../assets/svg/unSelectedCheckBoxIcon.svg";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useState } from "react";
import ButtonPrimary from "./Buttons/ButtonPrimary";
import ButtonSecondary from "./Buttons/ButtonSecondary";

{
  /* from the filter component*/
}
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

  const colorScheme = useColorScheme();

  return (
    <View style={styles.filterContainer}>
      <View style={styles.headingAndIcon}>
        <MonoText style={styles.filterHeading}>Filter</MonoText>
        <CloseIcon onPress={handleCloseBottomSheet} />
      </View>
      <MonoText style={{ fontWeight: "400", fontSize: 14, marginBottom: 4 }}>
        Transaction Type
      </MonoText>
      {/* Option for All*/}
      <View style={styles.transactionType}>
        <UnSelectedCheckBoxIcon style={{ margin: 12 }} />
        <MonoText>All Type</MonoText>
      </View>
      <View style={styles.separator} darkColor="#E6E6E6" />

      {/* Option for All ends Here*/}

      {/* Option for Eye dilation*/}
      <View style={styles.transactionType}>
        <UnSelectedCheckBoxIcon style={{ margin: 12 }} />
        <MonoText>Eye dilation</MonoText>
      </View>
      <View style={styles.separator} darkColor="#E6E6E6" />
      {/* Option for Eye dilation ends here*/}

      {/* Option for  Heart rate*/}
      <View style={[styles.transactionType, { marginBottom: 16 }]}>
        <UnSelectedCheckBoxIcon style={{ margin: 12 }} />
        <MonoText>Heart Rate</MonoText>
      </View>
      {/* Option for Heart rate  ends here*/}

      <MonoText style={{ fontWeight: "400", fontSize: 14, marginBottom: 8 }}>
        Transaction date Range
      </MonoText>

      <View
        style={[
          styles.transactionDateContainer,
          { borderColor: Colors[colorScheme ?? "light"].borderColor },
        ]}
      >
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeInput}
          value={dateRange}
          placeholder="MM/DD/YYYY"
        />
      </View>
      <ButtonPrimary title="Apply Filter" />
      <ButtonSecondary title="Clear Filter" />

      {/* Margin Container */}
      <View style={{ marginVertical: 8 }}></View>
      {/* Margin Container Ends here*/}
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    marginHorizontal: 16,
  },
  headingAndIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 32,
    marginBottom: 8,
  },
  filterHeading: {
    fontWeight: "700",
    fontSize: 24,
  },
  separator: {
    height: 1,
    marginHorizontal: 16,
  },
  transactionDateContainer: {
    height: 56,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  textInput: {
    fontSize: 16,
    fontWeight: "400",
  },
  transactionType: {
    display: "flex",
    flexDirection: "row",
    height: 48,
    alignItems: "center",
  },
});
export default Filter;
