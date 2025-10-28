import { API_CONSTANTS } from "../constants/app-constants";

export const fetch_helper = async (endpoint, options = {}) => {
  const { access_token, base_url } = API_CONSTANTS;
  const fetchConfig = {
    method: "GET",
    ...options,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };

  const url = `${base_url}${endpoint}`;

  try {
    const response = await fetch(url, fetchConfig);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
