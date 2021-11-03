import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function StatBadge({ label, value }) {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
      <View style={styles.values}>
        <AppText style={styles.label}>{label}</AppText>
        <AppText style={styles.value}>{value}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 10,
    backgroundColor: colors.dark,
    borderRadius: 15,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    color: colors.white,
    fontSize: 10,
  },
  value: {
    color: colors.white,
    fontSize: 20,
  },
  values: {
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    position: "absolute",
    backgroundColor: colors.primary,
    height: "100%",
    width: 3,
    left: 15,
  },
});

export default StatBadge;
