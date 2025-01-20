import express from "express";
import { getCountries, getCountryByCode, getCountriesByRegion, searchCountries } from "../services/countryService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const countries = await getCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch countries" });
  }
});

router.get("/:code", async (req, res) => {
  try {
    const country = await getCountryByCode(req.params.code);
    res.json(country);
  } catch (error) {
    res.status(404).json({ error: "Country not found" });
  }
});

router.get("/region/:region", async (req, res) => {
  try {
    const countries = await getCountriesByRegion(req.params.region);
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch countries by region" });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { name, capital, region, timezone } = req.query;
    const countries = await searchCountries({ name, capital, region, timezone });
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
});

export default router;