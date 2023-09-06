import axios from "axios"; 
import { createAsyncThunk } from "@reduxjs/toolkit";


//show all countries
 export const showAllCountries = createAsyncThunk("countries/showAll",async(_, thunkAPI) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      // const data= response.json();
       return response.data;
      // return response ; 
     
  
    } catch (err) {
      const message = (err.response && err.response.data) || err.message;
      return thunkAPI.rejectWithValue(message);


   
    }
  }
);

//search by cioc code 

export const SearchByCode = createAsyncThunk("countries/searchByCode", async(code, thunkAPI) => {


  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    // const data= response.json();
     return response.data;
    // return response ; 
   

  } catch (err) {
    const message = (err.response && err.response.data) || err.message;
    return thunkAPI.rejectWithValue(message);


  }

});
  

//search by region

export const searchByRegion= createAsyncThunk("country/searchByRegion" ,async(region , thunkAPI)=> {

try {
  const response = await axios.get (`https://restcountries.com/v3.1/region/${region}`);

return response.data;
} catch (err) {
  const message = (err.response && err.response.data) || err.message;
  return thunkAPI.rejectWithValue(message);
}


} )