import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function KillerAdepts({ achievements }) {
  const isAchieved = (apiname) => {
    const achievement = achievements.filter(
      (achievement) => achievement.apiname === apiname
    );
    return achievement[0].achieved;
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Killer Adept Achievements</AppText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_UNLOCK_CHUCKLES_PERKS")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/0eb94eaada26b7fda5549f11fe305fbe5fbcb405.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/1688b74261be8303a60866effd636d55686965aa.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_UNLOCKBANSHEE_PERKS")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/a1f87117307816db4d5c27b49d50018d1fe828fa.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/26053edabe364f6be8cd4297294390aa9429bb5d.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_UNLOCKHILLBILY_PERKS")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/749dcdf02002d404f460f95542885f46c3666252.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/8e98629cad3ffef50ce2581b0034d6ed2a0a001a.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_DLC1_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/ce247633f597f990d2a07dc55f2e98262574a6b2.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/74f93c38131aac7ba816bddf0cd24d7298b70a56.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_DLC2_KILLER_1")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/415c466e67b47b10233b1ba542ee3f805619d5c7.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/c1a326197a740baff4e433eaba4e1749123c70e3.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_DLC3_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/62165b7de16c52d0ad7bb24b16e482579ba67a77.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/b8a237091357c750f62a855ccacf5abf83864f58.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_DLC4_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/207b85705b3509ed0730a1d262a3ca4c02c09117.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/3fb6892137e04e304d933cd60f9e27f3b3000a37.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_DLC5_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/d0b3a2e4399984d0546544efdc9e930900eba800.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/af10f2534cc23c6ce55fd66e1597b75660b98d25.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_DLC6_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/9c022727a51a2af80203cbd7587bed1477aa4b5f.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/f44c8811ae6f19db852859f28e3d807b0b8b2c3d.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_DLC7_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/61e2a7177dd24e54411d7cccd85d38e122617bbe.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/a8528c8bc90c81d9011879e7593b984467d4b001.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_DLC8_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/0a53c8a429fd217ef141777d90f4aae61ece9f6d.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/710190b8a23b66af4d6d671254e2a4b4e87812ca.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_DLC9_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/9c45bdf0facae9aa79bd7507f4aa9c573fa2bfbd.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/5af3c3bdd8e54fed8748d39563e5f90a2fab0e2c.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_CHAPTER9_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/59de7113f07c0a21c2d7982bd18bda481a3b32b4.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/575cdc21adefdae5f9884ff2c360f8b5ce73ab72.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_CHAPTER10_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/e50463d5322644d50672e1d75a712003fb97053e.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/ec0c21ad133888d9644b265cf7296b808015319e.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_CHAPTER11_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/ba6ff31101922a8c7ee9bd60cc0eb33acbc3b386.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/f748d04f7c6937c8b9229ed2452b35cb698b9985.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_CHAPTER12_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/9036a06094d09081700171d674153f795807838f.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/87193ea58196fc9cd8b19a395b4b6d31a3261a83.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_CHAPTER14_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/485b1435eae4f1f83bbc8c567005e47a38396d6e.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/921c23f5fc80008ff7a6dad4243edae6c2f9f195.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("NEW_ACHIEVEMENT_146_28")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/d9792c9824fca735727002127768842f7e9febbc.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/bb8d06ed348fc78d5900405d149785e061d11dd3.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_CHAPTER16_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/659ac85ff0398bda5460eec6e1f32e91e65c8547.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/5f7195023a1fa4376e8f6e58ec252994379de4e0.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_CHAPTER17_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/8b450d1738e4ebc7ce4f7d3ad8808e5004685a6e.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/0e07caa5c970d070de9c4151b380909b4e43ef1e.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_CHAPTER18_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/f1082dc6b4b905821f58ca3866c2f124bcb1b65e.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/a4d3d3434a64c9767e7a594e2f7196191dcca9ef.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_CHAPTER19_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/e36fe906eaa181d37c5a0243348a68fc02c55c04.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/2a1013c4b092cf5d565ad1dec30663f508513039.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_CHAPTER20_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/2e37135eb80b71a1f3c3301761a7cf254e8db0c9.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/447635cb80761ff89108350d01c9f3d72d54f50b.jpg",
                }
          }
        />
        <Image
          style={styles.image}
          source={
            isAchieved("ACH_CHAPTER21_KILLER_3")
              ? {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/2bd94b1c279d5d9aad351c37696a445c1150d107.jpg",
                }
              : {
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/381210/a977231b554502aad81d744e9b9ee5603efc58ed.jpg",
                }
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "90%",
  },
  imageContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: 40,
    height: 40,
    margin: 2,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 6,
  },
});

export default KillerAdepts;
