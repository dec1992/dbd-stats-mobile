import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function SurvivorRank({ pips }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Current Survivor Rank</AppText>
      {pips < 3 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s20.png")}
        />
      )}
      {pips > 2 && pips < 6 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s19.png")}
        />
      )}
      {pips > 5 && pips < 10 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s18.png")}
        />
      )}
      {pips > 9 && pips < 14 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s17.png")}
        />
      )}
      {pips > 13 && pips < 18 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s16.png")}
        />
      )}
      {pips > 17 && pips < 22 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s15.png")}
        />
      )}
      {pips > 21 && pips < 26 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s14.png")}
        />
      )}
      {pips > 25 && pips < 30 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s13.png")}
        />
      )}
      {pips > 29 && pips < 35 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s12.png")}
        />
      )}
      {pips > 34 && pips < 40 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s11.png")}
        />
      )}
      {pips > 39 && pips < 45 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s10.png")}
        />
      )}
      {pips > 44 && pips < 50 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s9.png")}
        />
      )}
      {pips > 49 && pips < 55 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s8.png")}
        />
      )}
      {pips > 54 && pips < 60 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s7.png")}
        />
      )}
      {pips > 59 && pips < 65 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s6.png")}
        />
      )}
      {pips > 64 && pips < 70 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s5.png")}
        />
      )}
      {pips > 69 && pips < 75 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s4.png")}
        />
      )}
      {pips > 74 && pips < 80 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s3.png")}
        />
      )}
      {pips > 79 && pips < 85 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s2.png")}
        />
      )}
      {pips > 84 && (
        <Image
          style={styles.image}
          source={require("../../assets/images/s1.png")}
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

export default SurvivorRank;
