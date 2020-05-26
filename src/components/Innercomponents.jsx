import React, { Component } from "react";
// import { render } from "@testing-library/react";

class Innercomponents extends Component {

    state = {
        Lexus: ["LF","Spindle Grille","ES350" ],
        Porsche: ["Cayenne","Panamera","Taycan"],
        Lincoln: ["Typw1", "Type2"]

        };

        selectvalue = (comingvalue)=>{
            const {Lexus, Porsche,Lincoln}=this.state;
            if(comingvalue === "Lexus"){
                return Lexus.map((coup,index) => { return <div key={`${index}_fil`}> {coup}  </div> });
            }
            else if(comingvalue === "Porsche"){
                return Porsche.map((car,index) => { return <div key={`${index}_filter`}> {car}  </div> });
            }
            else {
                return Lincoln.map((oth,index) => { return <div key={`${index}_filter`}> {oth}  </div> });
            }
        }

    render(){
        console.log(this.props.filteredValue+" Innercomponentss");
        const comingvalue = this.props.filteredValue;
        return(
            
            <div className="card">
                <div  className="card-body">
        <p>Result of clicking {this.props.filteredValue}</p>
                {this.selectvalue(comingvalue)}
                </div>
            </div>

        );
    }


} 
export default Innercomponents