import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";

const Home: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/countries");
        setCountries(data);
      } catch (error) {
        console.error("Failed to fetch countries", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country) => (
          <CountryCard
            key={country.cca3}
            name={country.name.common}
            region={country.region}
            flag={country.flags.svg}
            currentTime={new Date().toLocaleTimeString("en-US", {
              timeZone: country.timezones[0],
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        ))}
      </div>
    </>
  );
};

export default Home;