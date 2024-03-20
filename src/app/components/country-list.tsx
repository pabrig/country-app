"use client";
import { useState } from "react";

interface Country {
  name: string;
  flag: string;
}

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const toggleCountry = (countryName: string) => {
    if (selectedCountries.includes(countryName)) {
      setSelectedCountries(
        selectedCountries.filter((country) => country !== countryName)
      );
    } else {
      setSelectedCountries([...selectedCountries, countryName]);
    }
  };

  const toggleAllCountries = () => {
    if (selectedCountries.length === countries.length) {
      setSelectedCountries([]);
    } else {
      setSelectedCountries(countries.map((country) => country.name));
    }
  };

  return (
    <div>
      <label>
        <input
          className="text-lg font-bold"
          type="checkbox"
          checked={selectedCountries.length === countries.length}
          onChange={toggleAllCountries}
        />{" "}
        Select All
      </label>
      <br />
      {countries.map((country) => (
        // eslint-disable-next-line react/jsx-key
        <div className="grid text-center">
          <label key={country.name}>
            <input
              type="checkbox"
              checked={selectedCountries.includes(country.name)}
              onChange={() => toggleCountry(country.name)}
            />{" "}
            {country.name}
            {country.flag}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
