import client from "./client";
import getEnvVars from "../../environment";
const { apiKey } = getEnvVars();

const getAchievements = (steamId) => {
  const API_KEY = apiKey;
  const endpoint = `ISteamUserStats/GetPlayerAchievements/v0001/?appid=381210&key=${API_KEY}&steamid=${steamId}`;

  return client.get(endpoint);
};

export default {
  getAchievements,
};
