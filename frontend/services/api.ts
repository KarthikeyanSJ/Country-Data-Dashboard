import axios from "axios";

const API_URL = "http://localhost:3001";

export const fetchCountries = async () => {
  const { data } = await axios.get(`${API_URL}/countries`);
  return data;
};

export const fetchCountryByCode = async (code: string) => {
  const { data } = await axios.get(`${API_URL}/countries/${code}`);
  return data;
};