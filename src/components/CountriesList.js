// CountriesList.jsx
import React, { useEffect, useState } from "react";
import CountriesItem from "./CountriesItem";
import CountryInfo from "./CountryInfo";
import CountriesFilter from "./CountriesFilter";

function CountriesList(props) {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setAllCountries(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
      });
  }, []);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleBackClick = () => {
    setSelectedCountry(null);
  };

  const handleInputChange = (value) => {
    setSearchTerm(value);
  };
  const handleSelectChange = (value) => {
    setRegionFilter(value);
  };

  if (selectedCountry) {
    return <CountryInfo country={selectedCountry} onBack={handleBackClick} />;
  }

  const filteredCountries = allCountries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (regionFilter === "" || country.region.includes(regionFilter))
  );

  return (
    <section className="TableCountries">
      <CountriesFilter
        toggleFilter={handleInputChange}
        toggleRegion={handleSelectChange}
      />
      <div className="ListOfCountries">
        {filteredCountries.map((country, index) => (
          <div
            className="country"
            key={index}
            onClick={() => handleCountryClick(country)}
          >
            <CountriesItem
              flags={country.flags.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CountriesList;
