import React, { useCallback, useMemo, useRef } from "react";
import { View, StyleSheet, Platform, Pressable } from "react-native";
import {
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import FilterSvg from "../assets/svg/filterSvg.svg";
import Filter from "../components/Filter";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";

const CustomBottomSheet = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables for snapshots
  const snapPoints = useMemo(
    () => ["25%", Platform.OS === "ios" ? "55" : "65"],
    []
  );

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const handleCloseBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const CustomBackdrop = ({
    animatedIndex,
    style,
  }: BottomSheetBackdropProps) => {
    // animated variables
    const containerAnimatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(
        animatedIndex.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP
      ),
    }));

    // styles for backdrop
    const containerStyle = useMemo(
      () => [
        style,
        {
          backgroundColor: "rgba(35, 35, 35, .7)",
        },
        containerAnimatedStyle,
      ],
      [style, containerAnimatedStyle]
    );

    return <Animated.View style={containerStyle} />;
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={handlePresentModalPress}>
          <FilterSvg />
        </Pressable>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={CustomBackdrop}
          handleComponent={() => (
            <View style={styles.closeLineContainer}>
              <View style={styles.closeLine}></View>
            </View>
          )}
        >
          <ScrollView
            style={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
          >
            <Filter closeBottomSheet={handleCloseBottomSheet} />
          </ScrollView>
        </BottomSheetModal>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "white",
    fontSize: 16,
  },
  closeLineContainer: {
    alignSelf: "center",
  },
  closeLine: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D9D9D9",
    marginTop: 9,
  },
});

export default CustomBottomSheet;
