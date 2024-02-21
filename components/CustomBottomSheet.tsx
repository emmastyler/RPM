import React, { useCallback, useMemo, useRef } from "react";
import { View, StyleSheet, Platform } from "react-native";
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

  // variables
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

    // styles
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

  // renders
  return (
    <>
      <View style={styles.container}>
        <FilterSvg onPress={handlePresentModalPress} />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={CustomBackdrop} //add this
        >
          <ScrollView style={styles.contentContainer}>
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
});

export default CustomBottomSheet;
