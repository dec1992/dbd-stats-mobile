import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "../navigation/routes";
import StatsScreen from "../screens/StatsScreen";
import KillerStatsScreen from "../screens/KillerStatsScreen";
import SurvivorStatsScreen from "../screens/SurvivorStatsScreen";
import useApi from "../hooks/useApi";
import statsApi from "../api/stats";
import userApi from "../api/user";
import acheivementApi from "../api/achievements";
import gamesApi from "../api/games";
import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const StatsNavigator = ({ route }) => {
  const steamId = route.params;
  const {
    request: loadStats,
    data: stats,
    error: statsError,
    loading: statsLoading,
  } = useApi(statsApi.getStats);
  const {
    request: loadUser,
    data: user,
    error: userError,
    loading: userLoading,
  } = useApi(userApi.getUser);
  const {
    request: loadAcheivements,
    data: acheivements,
    error: acheivementsError,
    loading: acheivementsLoading,
  } = useApi(acheivementApi.getAchievements);
  const {
    request: loadGames,
    data: games,
    error: gamesError,
    loading: gamesLoading,
  } = useApi(gamesApi.getGames);

  const fetchData = () => {
    loadStats(steamId);
    loadAcheivements(steamId);
    loadUser(steamId);
    loadGames(steamId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ActivityIndicator
        visible={
          statsLoading || userLoading || acheivementsLoading || gamesLoading
        }
      />
      {(statsError || acheivementsError || userError || gamesError) && (
        <Screen>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={() => fetchData()} />
        </Screen>
      )}
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveBackgroundColor: colors.dark,
          tabBarActiveBackgroundColor: colors.primary,
          tabBarActiveTintColor: colors.white,
        }}
      >
        <Tab.Screen
          name={routes.MAIN_STATS}
          children={() => (
            <StatsScreen
              stats={stats}
              acheivements={acheivements}
              user={user}
              games={games}
            />
          )}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={routes.KILLER_STATS}
          children={() => <KillerStatsScreen stats={stats} />}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="knife" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={routes.SURVIVOR_STATS}
          children={() => <SurvivorStatsScreen stats={stats} />}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="medical-bag"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default StatsNavigator;
