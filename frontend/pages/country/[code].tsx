import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../components/Header";

const CountryDetail: React.FC = () => {
  const [country, setCountry] = useState<any>(null);
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      const fetchCountry = async () => {
        try {
          const { data } = await axios.get(`http://localhost:3001/countries/${code}`);
          setCountry(data);
        } catch (error) {
          console.error("Failed to fetch country details", error);
        }
      };

      fetchCountry();
    }
  }, [code]);

  if (!country) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold">{country.name.common}</h1>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Languages: {Object.values(country.languages).join(", ")}</p>
        <p>Currency: {Object.keys(country.currencies).join(", ")}</p>
        <img src={country.flags.svg} alt={`${country.name.common} flag`} className="w-32 h-20 mt-4" />
      </div>
    </>
  );
};

export default CountryDetail;