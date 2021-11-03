import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ImageOverlay from "react-native-image-overlay";

import ActivityIndicator from "../components/ActivityIndicator";
import KillerAdepts from "../components/KillerAdepts";
import Profile from "../components/Profile";
import Screen from "../components/Screen";
import StatBadge from "../components/StatBadge";
import colors from "../config/colors";

function StatsScreen({ stats, acheivements, user, games }) {
  const [hoursPlayed, setHoursPlayed] = useState(0);

  useEffect(() => {
    if (games) {
      const dbd = games.response.games.filter((game) => game.appid === 381210);
      setHoursPlayed(dbd[0].playtime_forever / 60);
    }
  }, [games]);

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

  if (!stats || !acheivements || !user || !games) {
    return (
      <Screen>
        <ActivityIndicator visible={true} />
      </Screen>
    );
  }

  return (
    <ImageOverlay
      source={require("../../assets/images/background.jpg")}
      height={"100%"}
      overlayColor={colors.black}
      overlayAlpha={0.7}
    >
      <View style={styles.container}>
        <Profile profile={user.response.players[0]} />
        <StatBadge label="Hours Played" value={hoursPlayed} />
        <StatBadge
          label="Bloodpoints Earned"
          value={returnObject("DBD_BloodwebPoints")}
        />
        <KillerAdepts achievements={acheivements.playerstats.achievements} />
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
  },
  text: {
    color: colors.white,
  },
});

export default StatsScreen;
