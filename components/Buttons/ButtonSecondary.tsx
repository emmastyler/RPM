import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { MonoText } from "../StyledText";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

export default function ButtonSecondary({ title }: { title: string }) {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.buttonPrimaryContainer,
        {
          backgroundColor: Colors[colorScheme ?? "light"].buttonSecondaryColor,
        },
      ]}
    >
      <MonoText style={styles.title}>{title}</MonoText>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPrimaryContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#7761FF",
  },
});
