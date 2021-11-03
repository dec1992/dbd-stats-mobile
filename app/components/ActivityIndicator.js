import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet, Text } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <LottieView autoPlay loop source={require("./loader.json")} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
