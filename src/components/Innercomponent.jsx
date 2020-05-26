import React, {Component} from 'react';

class Innercomponenet extends Component {
    selectvalue = (comingvalue) => {
        const carModels = ["Model 1", "Model 2", "Model 3"]
        return carModels.map((model, index) => {
            return <div key={`${index}_fil3`}>
                <div className="card m-1">
                    <div className="card-body"><p>{comingvalue + " " + model} </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        });
    }

    render() {
        const comingvalue = this.props.selectedvalue;
        return (<div>
            {this.props.selectedvalue}
            {this.selectvalue(comingvalue)}
        </div>);
    }
}

export default Innercomponenet