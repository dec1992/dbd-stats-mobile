import client from "./client";
import getEnvVars from "../../environment";
const { apiKey } = getEnvVars();

const getStats = (steamId) => {
  const API_KEY = apiKey;
  const endpoint = `ISteamUserStats/GetUserStatsForGame/v0002/?appid=381210&key=${API_KEY}&steamid=${steamId}`;

  return client.get(endpoint);
};

export default {
  getStats,
};
