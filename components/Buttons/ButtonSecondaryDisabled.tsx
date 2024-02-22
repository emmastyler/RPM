import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { MonoText } from "../StyledText";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

export default function ButtonSecondaryDisabled({ title }: { title: string }) {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.buttonSecondaryDisabledContainer,
        {
          backgroundColor: Colors[colorScheme ?? "light"].background,
          borderColor:
            Colors[colorScheme ?? "light"].buttonPrimaryDisabledColor,
        },
      ]}
    >
      <MonoText style={styles.title}>{title}</MonoText>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSecondaryDisabledContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#848484",
  },
});
