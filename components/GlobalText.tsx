import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "./Themed";

interface GlobalTextProps {
  content: string;
  heading: string; // Define the heading prop here
}

export default function GlobalText({ content, heading }: GlobalTextProps) {
  return (
    <View>
      <View style={styles.globalTextContainer}>
        <Text style={styles.textHeading}>{heading}</Text>
        <Text style={styles.globalText}>{content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  globalTextContainer: {
    paddingHorizontal: 16,
    height: 82,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  globalText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    fontWeight: "400",
    paddingVertical: 8,
  },
});
