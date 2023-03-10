import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countryes = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3>This is the countries component: {countries.length}</h3>
      <ul>
        {countries.map((country) => (
          <li>
            <Link to={`/country/${country.name.common}`}>
              {country.name.common}
            </Link>
          </li>
        ))}
        console.log(country);
      </ul>
    </div>
  );
};

export default Countryes;
