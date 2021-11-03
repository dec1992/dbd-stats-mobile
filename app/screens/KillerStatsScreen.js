import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ImageOverlay from "react-native-image-overlay";

import AppText from "../components/AppText";
import KillerRank from "../components/KillerRank";
import StatBadge from "../components/StatBadge";
import colors from "../config/colors";

function KillerStats({ stats }) {
  function returnObject(name) {
    const object = stats.playerstats.stats.filter((obj) => {
      return obj.name === name;
    });

    if (object[0]) {
      return object[0].value;
    } else {
      return 0;
    }
  }

  return (
    <ImageOverlay
      source={require("../../assets/images/background.jpg")}
      height={"100%"}
      overlayColor={colors.black}
      overlayAlpha={0.7}
    >
      <View style={styles.container}>
        <KillerRank pips={stats.playerstats.stats[0].value} />
        <AppText style={styles.text}>Killer Stats</AppText>
        <StatBadge
          label="Games Played (with full loadout)"
          value={returnObject("DBD_SlasherFullLoadout")}
        />
        <StatBadge
          label="Survivors Sacrificed"
          value={returnObject("DBD_SacrificedCampers")}
        />
        <StatBadge
          label="Survivors Killed"
          value={returnObject("DBD_KilledCampers")}
        />
        <StatBadge
          label="Perfect Games"
          value={returnObject("DBD_SlasherMaxScoreByCategory")}
        />
        <StatBadge
          label="Survivors Hooked in Basement"
          value={returnObject("DBD_DLC6_Slasher_Stat2")}
        />
        <StatBadge
          label="Wins With Generators Remaining"
          value={returnObject("DBD_Chapter12_Slasher_Stat1")}
        />
        <StatBadge
          label="Hatches Closed"
          value={returnObject("DBD_Chapter13_Slasher_Stat1")}
        />
      </View>
    </ImageOverlay>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  text: {
    color: colors.white,
    marginBottom: 10,
  },
});

export default KillerStats;
