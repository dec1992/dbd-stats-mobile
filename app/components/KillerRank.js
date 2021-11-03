import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function KillerRank({ pips }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Current Killer Rank</AppText>
      {pips < 3 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k20.png")}
        />
      )}
      {pips > 2 && pips < 6 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k19.png")}
        />
      )}
      {pips > 5 && pips < 10 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k18.png")}
        />
      )}
      {pips > 9 && pips < 14 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k17.png")}
        />
      )}
      {pips > 13 && pips < 18 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k16.png")}
        />
      )}
      {pips > 17 && pips < 22 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k15.png")}
        />
      )}
      {pips > 21 && pips < 26 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k14.png")}
        />
      )}
      {pips > 25 && pips < 30 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k13.png")}
        />
      )}
      {pips > 29 && pips < 35 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k12.png")}
        />
      )}
      {pips > 34 && pips < 40 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k11.png")}
        />
      )}
      {pips > 39 && pips < 45 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k10.png")}
        />
      )}
      {pips > 44 && pips < 50 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k9.png")}
        />
      )}
      {pips > 49 && pips < 55 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k8.png")}
        />
      )}
      {pips > 54 && pips < 60 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k7.png")}
        />
      )}
      {pips > 59 && pips < 65 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k6.png")}
        />
      )}
      {pips > 64 && pips < 70 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k5.png")}
        />
      )}
      {pips > 69 && pips < 75 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k4.png")}
        />
      )}
      {pips > 74 && pips < 80 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k3.png")}
        />
      )}
      {pips > 79 && pips < 85 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k2.png")}
        />
      )}
      {pips > 84 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/k1.png")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    color: colors.white,
    marginBottom: 20,
  },
});

export default KillerRank;
