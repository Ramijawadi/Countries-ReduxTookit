import "./country.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  searchByRegion,
  showAllCountries,
} from "../../features/countries/countrieAction";
import { reset } from "../../features/countries/countrieSlice";
import { Link } from "react-router-dom";

import React from "react";
import { Spin } from "antd";

const Country = () => {
  const [loading1, setLoading1] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading1(false); // Disable the loading state after a delay
    }, 3000); // Set the delay time in milliseconds (e.g., 2000ms for a 2-second delay)

    return () => {
      clearTimeout(timer); // Clean up the timer if the component unmounts
    };
  }, []);

  const { countriesData, loading, success, error, region , searchTerm} = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();

  // const [countryData, setCountryData] = useState([]);

  useEffect(() => {
   
    dispatch(showAllCountries());

    if (success) {
      // setCountryData(countriesData);
    }

    if (region) {
      dispatch(searchByRegion(region));
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success, region]);


const data = countriesData.filter((item)=>item.name.common.toLowerCase().includes(searchTerm));

  return (
    <section className="country-container">
      {loading1 ? (
        <h1>
          {" "}
          <Spin size="large" />
        </h1>
      ) : (
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <>
              <Link className="country-card" key={index} to={`/${item.cioc}`}>
                <img
                  src={item.flags.png}
                  alt={item.flags.alt}
                  className="country-image"
                />
                <div className="country-content">
                  <h3> {item.name.common}</h3>
                  <p>
                    Population: <span>{item.population}</span>
                  </p>
                  <p>
                    Region: <span>{item.region}</span>
                  </p>
                  <p>
                    Capital: <span>{item.capital}</span>
                  </p>
                </div>
              </Link>
            </>
          );
        })
      )}
    </section>
  );
};

export default Country;
