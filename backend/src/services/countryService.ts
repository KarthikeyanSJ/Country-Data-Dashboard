import axios from "axios";
import { cache } from "../utils/cache";

const BASE_URL = "https://restcountries.com/v3.1";

export const getCountries = async () => {
  const cacheKey = "allCountries";
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  const { data } = await axios.get(`${BASE_URL}/all`);
  cache.set(cacheKey, data);
  return data;
};

export const getCountryByCode = async (code: string) => {
  const { data } = await axios.get(`${BASE_URL}/alpha/${code}`);
  return data;
};

export const getCountriesByRegion = async (region: string) => {
  const { data } = await axios.get(`${BASE_URL}/region/${region}`);
  return data;
};

export const searchCountries = async (filters: Record<string, string | undefined>) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });

  const { data } = await axios.get(`${BASE_URL}/all`, { params });
  return data;
};