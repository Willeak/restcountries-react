import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CountryInfo(props) {
  const { country, onBack } = props;

  const countryName = country.name.common;
  console.log(countryName);

  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryDetails(data[0]);
        console.log(data[0].languages);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
      });
  }, []);

  const handleBackClick = () => {
    onBack();
  };

  return (
    <section id="TableCountry">
      <button className="ButtonBack" onClick={handleBackClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>
      {countryDetails && (
        <div id="descCountry">
          <img
            src={countryDetails.flags.png}
            alt={`${countryDetails.name} Flag`}
            width="100%"
            className="flag"
          />
          <div id="infoCountry">
            <h2>{countryDetails.name.common}</h2>
            <article>
              <ul>
                <li>
                  <b>Native Name:</b>{" "}
                  {countryDetails.name.nativeName?.fra?.official ?? "N/A"}
                </li>
                <li>
                  <b>Population:</b> {countryDetails.population ?? "N/A"}
                </li>
                <li>
                  <b>Region:</b> {countryDetails.region ?? "N/A"}
                </li>
                <li>
                  <b>Sub Region:</b> {countryDetails.subregion ?? "N/A"}
                </li>
                <li>
                  <b>Capital:</b> {countryDetails.capital ?? "N/A"}
                </li>
              </ul>

              <ul>
                <li>
                  <b>Top Level Domain:</b> {countryDetails.tld?.[0] ?? "N/A"}
                </li>

                <li>
                  <b>Currencies:</b>
                  {countryDetails.currencies ? (
                    <p>
                      {Object.entries(countryDetails.currencies).map(
                        ([code, currency]) => (
                          <span key={code}>
                            {currency.name} ({currency.symbol})
                          </span>
                        )
                      )}
                    </p>
                  ) : (
                    <p>
                      <li>N/A</li>
                    </p>
                  )}
                </li>

                <li>
                  <b>Languages:</b>
                  {countryDetails.languages ? (
                    <p>
                      {Object.entries(countryDetails.languages).map(
                        ([code, language], index, array) => (
                          <span key={index}>
                            {language}
                            {index < array.length - 1 && ", "}
                          </span>
                        )
                      )}
                    </p>
                  ) : (
                    <p>
                      <span>N/A</span>
                    </p>
                  )}
                </li>
              </ul>
            </article>

            <article>
              <ul>
                <b>Border Countries:</b>

                {countryDetails.borders?.length > 0 ? (
                  countryDetails.borders.map((borderCountry) => (
                    <li key={borderCountry}>{borderCountry}</li>
                  ))
                ) : (
                  <li>N/A</li>
                )}
              </ul>
            </article>
          </div>
        </div>
      )}
    </section>
  );
}

export default CountryInfo;
