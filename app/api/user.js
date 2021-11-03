import client from "./client";
import getEnvVars from "../../environment";
const { apiKey } = getEnvVars();

const getUser = (steamId) => {
  const API_KEY = apiKey;
  const endpoint = `ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamId}`;

  return client.get(endpoint);
};

export default {
  getUser,
};
