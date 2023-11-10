import { Fragment } from "react";

function CountriesItem(props) {
  let { name, flags, population, region, capital } = props;

  return (
    <Fragment>
      <img src={flags} alt={`${name} Flag`} width="100%" className="flag" />

      <span>
        <h2>{name}</h2>
        <p>
          <b>Population:</b> {population}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </span>
    </Fragment>
  );
}

export default CountriesItem;
