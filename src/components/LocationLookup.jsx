"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const LocationLookup = () => {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    axios
      .get(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => res.data)
      .then((data) => setCountry(data.country));
  }, []);

  return <div>{country}</div>;
};

export default LocationLookup;
