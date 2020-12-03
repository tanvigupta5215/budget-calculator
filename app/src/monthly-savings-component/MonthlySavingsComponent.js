import React from "react";
import './MonthlySavingsComponent.css';
class MonthlySavingsComponent extends React.Component {
    render(){
        return(
            <div className="container">
                <div id="retirementSavingsItem" className="row">
                    <div className="col-1">
                        <div className="form-check">
                        <input className="form-check-input input-styling mt-2" type="checkbox" color="black" value="" id="retirementSavings" />
                        </div>
                    </div>
                    <div className="col-3 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="retirementSavings">
                            <p className="mb-0">Retirement savings=</p>
                            <p className="text-small">(RRSP, TFSA, Non-reg, etc.)</p>
                        </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input disabled type="text" className="form-control" placeholder="" aria-label="enterRetirementSavings"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div id="Other=" className="row">
                    <div className="col-1">
                        <div className="form-check">
                            <input className="form-check-input input-styling mt-2" type="checkbox" color="black" value="" id="otherSavings" />
                        </div>
                    </div>
                    <div className="col-3 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="otherSavings">
                            <p className="mb-0">Other =</p>
                            <p className="text-small">(trips, cars, etc.)</p>
                        </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input disabled type="text" className="form-control" placeholder="" aria-label="otherSavings"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MonthlySavingsComponent;