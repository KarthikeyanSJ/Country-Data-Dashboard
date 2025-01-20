import React from "react";

interface CountryCardProps {
  name: string;
  region: string;
  flag: string;
  currentTime: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, region, flag, currentTime }) => {
  return (
    <div className="border rounded shadow p-4 flex items-center space-x-4">
      <img src={flag} alt={`${name} flag`} className="w-16 h-10" />
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p>{region}</p>
        <p>Current Time: {currentTime}</p>
      </div>
    </div>
  );
};

export default CountryCard;