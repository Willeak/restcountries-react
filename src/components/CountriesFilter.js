// CountriesFilter.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function CountriesFilter(props) {
  const { toggleFilter, toggleRegion } = props;

  const handleInputChange = (event) => {
    const value = event.target.value;
    toggleFilter(value);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    toggleRegion(value);
    console.log(value);
  };

  return (
    <section>
      <label htmlFor="monInput">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input
          type="text"
          id="monInput"
          name="monInput"
          placeholder="Search for a country..."
          onChange={handleInputChange}
        />
      </label>

      <select id="regionFilter" onChange={handleSelectChange}>
        <option disabled selected>
          Filter by Region
        </option>
        <option value="Africa"> Africa</option>
        <option value="America"> America</option>
        <option value="Asia"> Asia</option>
        <option value="Europe"> Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="">RESET</option>
      </select>
    </section>
  );
}

export default CountriesFilter;
