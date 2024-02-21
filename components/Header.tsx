import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import GlobalStyles from "./GlobalStyles";
import { Link } from "expo-router";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import { MonoText } from "./StyledText";

import NotificationSvg from "../assets/svg/notification.svg";

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View style={styles.container}>
        <MonoText style={styles.title}>{title}</MonoText>
        <Link href="/modal" asChild style={styles.notificationBell}>
          <Pressable>
            {({ pressed }) => (
              <NotificationSvg
                color={Colors[colorScheme ?? "light"].text}
                style={{ opacity: pressed ? 0.5 : 1 }}
                width={24}
                height={24}
              />
            )}
          </Pressable>
        </Link>
      </View>
      <StatusBar style={"dark"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
  },
  notificationBell: {
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#F3F3F3",
  },
});

export default CustomHeader;
