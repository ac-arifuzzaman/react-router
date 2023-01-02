import React from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryDetail } = useParams();
  return (
    <div>
      <h5>This is from country details: {countryDetail}</h5>
    </div>
  );
};

export default CountryDetails;
