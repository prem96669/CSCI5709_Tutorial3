/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



const top10carbrands = [ "Lexus","Porsche","Lincoln","Toyota","Mercedes-Benz", "Buick", "Kia", "BMW",
"honda", "Chevrolet"];
  
export default function Search() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top10carbrands}
      getOptionLabel={(option) => option}
      style={{ width: 300 }}
      renderInput={(params) =><TextField {...params} label="Search car brand" variant="outlined" />}
    />
  );
}

