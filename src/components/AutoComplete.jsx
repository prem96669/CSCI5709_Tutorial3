import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Innercomponent from "./Innercomponent"
class Search extends Component {
    state = { 
        CarBrands : [
            { brand: 'Lamborghini'},
            { brand: 'BMW'},
            { brand: 'Audi'},
            { brand: 'Aston Martin'},
            { brand: 'Jaguar'},
            { brand: 'Ferrari'},
            { brand: 'Rolls Royce'},
            { brand: 'Jaguar'},
            { brand: 'Koenigsegg'},
          ],
           value: '',
           selected: '',
           selectedvalue:''
     }
     valuechange = (value) => {
         if(value==null ||value.brand === "")
         {
            this.setState({selected: ""})
         }
         else
         {
         this.setState({
            selected: value.brand
         })
        }
     }
    render() { 
        return (
            <div className="container">
            <div style={{alignItems:"center",justifyContent:"center",display:"flex",marginTop:"80px"}}>
                <Autocomplete
                id="autocomplete-box"
                options={this.state.CarBrands}
                getOptionLabel={(option) => option.brand}
                style={{ width: 300 }}
                onChange={(event, value) => this.valuechange(value)} 
                renderInput={(params) => <TextField {...params} label="Search Car Brand" variant="outlined" />}
                />
            </div>
                { this.state.selected !== "" &&
                    <Innercomponent selectedvalue = {this.state.selected}/>
                }
            </div>
          );
    }
}

export default Search;