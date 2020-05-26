import React, {Component} from 'react'
import Innercomponents from "./Innercomponents"
import "bootstrap/dist/css/bootstrap.css"
// import Card from "bootstrap/dist/css/card"

class AutoComplete extends Component {
    state = {
        value: 1,
        inputText:'',
        autoComplete:[ "Lexus","Porsche","Lincoln","Toyota","Mercedes-Benz", "Buick", "Kia", "BMW",
        "honda", "Chevrolet"],
        emptyvalue : "no values to display",
        carsClicked:false,
        valueclicked:'',
        filteredValues:[]
    };
    inputOnChange = e =>{
        const inputValue=e.target.value;
        const {autoComplete}=this.state;
        let stateObj={}
        this.setState({inputText:inputValue})
        if(inputValue==="") {
            stateObj.filteredValues=[] ;
            stateObj.valueclicked=""}
        else stateObj.filteredValues=autoComplete.filter(item=> item.toLowerCase().startsWith(inputValue.toLowerCase()))
        this.setState(stateObj)
    }
    render(){
        const {inputText,filteredValues,carsClicked}=this.state;
        return(
            <div>                
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <pre>
                            <label>Please enter car brand name (Ex:Lexus) </label>
                            <input type="text" name="v_type" onChange={(e)=>this.inputOnChange(e)} value={inputText}/>
                            </pre>
                        </div>
                    </div>
                
                <div className="card-body">
                {filteredValues.length>0 && 
                
                filteredValues.map((filteredValue,index)=>{
                return <div key={`${index}_filter`} className="card"> <pre><div className="card-body">
                    <button key={`${index}_filter`} onClick={()=>{
                    this.setState({carsClicked:!carsClicked, valueclicked:filteredValue});}}>
                    { filteredValue } 
                    </button> 
                    </div></pre> </div>
                })
                }
                {this.state.valueclicked !== "" && 
                <div>
                    <Innercomponents filteredValue={this.state.valueclicked}/></div>}
                </div>
                
                {filteredValues.length === 0 && inputText!== "" && <div>No results found</div>}          


            </div>
            </div>
        );
    }
}
export default AutoComplete