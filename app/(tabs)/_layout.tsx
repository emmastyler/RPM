import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { StyleSheet, Platform } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { MonoText } from "../../components/StyledText";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";

import InActiveHomeSvg from "../../assets/svg/inactiveTabIcon/home.svg";
import InActiveVitalsSvg from "../../assets/svg/inactiveTabIcon/vitals.svg";
import InActiveScheduleSvg from "../../assets/svg/inactiveTabIcon/schedule.svg";
import InActiveChatSvg from "../../assets/svg/inactiveTabIcon/chat.svg";
import InActiveProfileSvg from "../../assets/svg/inactiveTabIcon/profile.svg";

import ActiveHomeSvg from "../../assets/svg/activeTabIcon/home.svg";
import ActiveVitalsSvg from "../../assets/svg/activeTabIcon/vitals.svg";
import ActiveScheduleSvg from "../../assets/svg/activeTabIcon/schedule.svg";
import ActiveChatSvg from "../../assets/svg/activeTabIcon/chat.svg";
import ActiveProfileSvg from "../../assets/svg/activeTabIcon/profile.svg";

import Header from "@/components/Header";
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        tabBarLabelStyle: {
          fontFamily: "PlusJakartaSans", // Set the custom font as the fontFamily
        },
        tabBarStyle: { height: Platform.OS === "ios" ? 104 : 70 },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <MonoText style={styles.activeTabBarLabel}>Home</MonoText>
            ) : (
              <MonoText style={styles.inActiveTabBarLabel}>{"Home"}</MonoText>
            ),
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <ActiveHomeSvg
                width={24}
                height={24}
                style={styles.activeTabBarIcon}
              />
            ) : (
              <InActiveHomeSvg
                width={24}
                height={24}
                style={styles.inActiveTabBarIcon}
              />
            );
          },
          header: () => <Header title="Home" />,
        }}
      />
      <Tabs.Screen
        name="Vitals"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <MonoText style={styles.activeTabBarLabel}>Vitals</MonoText>
            ) : (
              <MonoText style={styles.inActiveTabBarLabel}>{"Vitals"}</MonoText>
            ),
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <ActiveVitalsSvg
                width={24}
                height={24}
                style={styles.activeTabBarIcon}
              />
            ) : (
              <InActiveVitalsSvg
                width={24}
                height={24}
                style={styles.inActiveTabBarIcon}
              />
            );
          },
          header: () => <Header title="Vitals" />,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <MonoText style={styles.activeTabBarLabel}>Schedule</MonoText>
            ) : (
              <MonoText style={styles.inActiveTabBarLabel}>
                {"Schedule"}
              </MonoText>
            ),
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <ActiveScheduleSvg
                width={24}
                height={24}
                style={styles.activeTabBarIcon}
              />
            ) : (
              <InActiveScheduleSvg
                width={24}
                height={24}
                style={styles.inActiveTabBarIcon}
              />
            );
          },
          header: () => <Header title="Schedule" />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <MonoText style={styles.activeTabBarLabel}>Chat</MonoText>
            ) : (
              <MonoText style={styles.inActiveTabBarLabel}>{"Chat"}</MonoText>
            ),
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <ActiveChatSvg
                width={24}
                height={24}
                style={styles.activeTabBarIcon}
              />
            ) : (
              <InActiveChatSvg
                width={24}
                height={24}
                style={styles.inActiveTabBarIcon}
              />
            );
          },
          header: () => <Header title="Chat" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <MonoText style={styles.activeTabBarLabel}>Profile</MonoText>
            ) : (
              <MonoText style={styles.inActiveTabBarLabel}>
                {"Profile"}
              </MonoText>
            ),
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <ActiveProfileSvg
                width={24}
                height={24}
                style={styles.activeTabBarIcon}
              />
            ) : (
              <InActiveProfileSvg
                width={24}
                height={24}
                style={styles.inActiveTabBarIcon}
              />
            );
          },
          header: () => <Header title="Profile" />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  inActiveTabBarLabel: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    marginTop: -5,
  },
  activeTabBarLabel: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
    marginTop: -5,
  },
  activeTabBarIcon: {
    marginTop: 10,
  },
  inActiveTabBarIcon: {
    marginTop: 10,
  },
});
