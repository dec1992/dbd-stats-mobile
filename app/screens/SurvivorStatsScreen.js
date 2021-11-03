import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageOverlay from "react-native-image-overlay";

import StatBadge from "../components/StatBadge";
import colors from "../config/colors";
import AppText from "../components/AppText";
import SurvivorRank from "../components/SurvivorRank";

function SurvivorStats({ stats }) {
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <SurvivorRank pips={stats.playerstats.stats[1].value} />
          <AppText style={styles.text}>Survivor Stats</AppText>
          <StatBadge
            label="Games Played (with full loadout)"
            value={returnObject("DBD_CamperFullLoadout")}
          />
          <StatBadge
            label="Perfect Games"
            value={returnObject("DBD_CamperMaxScoreByCategory")}
          />
          <StatBadge label="Escapes" value={returnObject("DBD_Escape")} />
          <StatBadge
            label="Crawling Escapes"
            value={returnObject("DBD_EscapeKO")}
          />
          <StatBadge
            label="Hatch Escapes"
            value={returnObject("DBD_EscapeThroughHatch")}
          />
          <StatBadge
            label="Exit Gates Opened"
            value={returnObject("DBD_DLC7_Camper_Stat2")}
          />
          <StatBadge
            label="Generators Repaired"
            value={Math.round(returnObject("DBD_GeneratorPct_float"))}
          />
          <StatBadge
            label="Survivors Healed"
            value={Math.round(returnObject("DBD_HealPct_float"))}
          />
          <StatBadge
            label="Survivors Unhooked"
            value={
              returnObject("DBD_UnhookOrHeal") -
              returnObject("DBD_Chapter15_Camper_Stat1")
            }
          />
          <StatBadge
            label="Survivors Picked Up"
            value={returnObject("DBD_Chapter15_Camper_Stat1")}
          />
          <StatBadge
            label="Successful Skillchecks"
            value={returnObject("DBD_SkillCheckSuccess")}
          />
          <StatBadge
            label="Hex Totems Cleansed"
            value={returnObject("DBD_DLC3_Camper_Stat1")}
          />
          <StatBadge
            label="Vaults In Chase"
            value={returnObject("DBD_Camper8_Stat2")}
          />
          <StatBadge
            label="Hits Evaded by Vaulting"
            value={returnObject("DBD_DLC9_Camper_Stat1")}
          />
          <StatBadge
            label="Chests Searched"
            value={returnObject("DBD_DLC7_Camper_Stat1")}
          />
          <StatBadge
            label="Escaped With Loot"
            value={returnObject("DBD_CamperNewItem")}
          />
          <StatBadge
            label="Escaped With Teammate's Item"
            value={returnObject("DBD_CamperEscapeWithItemFrom")}
          />
        </View>
      </ScrollView>
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
  scrollView: { width: "100%" },
  text: {
    color: colors.white,
    marginBottom: 10,
  },
});

export default SurvivorStats;
