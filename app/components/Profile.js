import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function Profile({ profile }) {
  const { avatarfull, personaname, steamid } = profile;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: avatarfull }} />
      <View style={styles.info}>
        <Text style={styles.name}>{personaname}</Text>
        <Text style={styles.id}>{steamid}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
  },
  info: {
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    color: colors.white,
    fontSize: 20,
  },
  id: {
    color: colors.white,
    fontSize: 10,
  },
});

export default Profile;
