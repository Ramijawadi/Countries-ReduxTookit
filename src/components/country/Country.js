

import "./country.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAllCountries } from "../../features/countries/countrieAction"
import { reset } from "../../features/countries/countrieSlice";


// const tab = [{
//   id:"1",
// "name" : "rami"
// },
// {
//   id:2,
// "name" : "salah"
// },
// {
//   id:3,
// "name": "amine"

// }]

const Country = () => {
  const { countriesData, loading, success, error } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(showAllCountries());
    if (success) {
      setCountryData(countriesData);

    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success]);

  return (
    <section className="country-container">

      {loading ? (
        <h1>Loading ... </h1>
      ) : (
        countryData.length > 0 &&
        countryData.map((item, index) => {
          return (
            <div
              className="country-card"
              key=""
            >
<h1>{item.name}</h1>
              <img src={item.flags.png} alt={item.flags.alt} className="country-image" />
              <div className="country-content">
                <h3> </h3>
                <p>
                  Population: <span></span>
                </p>
                <p>
                  Region: <span></span>
                </p>
                <p>
                  Capital: <span></span>
                </p>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Country;
