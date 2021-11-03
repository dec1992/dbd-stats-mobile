import client from "./client";
import getEnvVars from "../../environment";
const { apiKey } = getEnvVars();

const getGames = (steamId) => {
  const API_KEY = apiKey;
  const endpoint = `IPlayerService/GetOwnedGames/v0001/?key=${API_KEY}&steamid=${steamId}&format=json`;

  return client.get(endpoint);
};

export default {
  getGames,
};
