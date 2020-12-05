import React from "react";
import './MonthlySavingsComponent.css';
import BaseComponent from "../base-component/BaseComponent";
class MonthlySavingsComponent extends BaseComponent {
    componentStateName = 'monthlySavingsState';
    constructor(props) {
        super(props);
        this.dataService.monthlySavingsStateDataSubscriber.subscribe((monthlySavingsState) => {
            this.state = monthlySavingsState;
            console.log('monthlySavingsState Received: ', monthlySavingsState);
            this.setState(monthlySavingsState);
        });
    }
    render(){
        return(
            <div className="container">
                <div id="retirementSavingsItem" className="row">
                    <div className="col-1">
                        <div className="form-check">
                        <input className="form-check-input input-styling mt-2" type="checkbox"
                               onChange={this.onCheckboxChangeHandler.bind(this, "retirementSavings")} checked={this.state.retirementSavings.retirementSavingsCheckbox} value="on"  id="retirementSavingsCheckbox" />
                        </div>
                    </div>
                    <div className="col-3 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="retirementSavings">
                            <p className="mb-0">Retirement savings=</p>
                            <p className="text-small">(RRSP, TFSA, Non-reg, etc.)</p>
                        </label>
                    </div>
                    <div className="col-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="number" className="form-control" placeholder="" aria-label="enterRetirementSavings"
                                   onChange={this.onInputChangeHandler.bind(this, "retirementSavings")} value={this.state.retirementSavings.retirementSavingsInput}
                                   aria-describedby="basic-addon1" id="retirementSavingsInput" disabled={!this.state.retirementSavings.retirementSavingsCheckbox} />
                        </div>
                    </div>
                </div>
                <div id="Other=" className="row">
                    <div className="col-1">
                        <div className="form-check">
                            <input className="form-check-input input-styling mt-2" type="checkbox"
                                   onChange={this.onCheckboxChangeHandler.bind(this, "otherSavings")} checked={this.state.otherSavings.otherSavingsCheckbox} value="on" id="otherSavingsCheckbox" />
                        </div>
                    </div>
                    <div className="col-3 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="otherSavings">
                            <p className="mb-0">Other =</p>
                            <p className="text-small">(trips, cars, etc.)</p>
                        </label>
                    </div>
                    <div className="col-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="number" className="form-control" placeholder="" aria-label="otherSavings"
                                   onChange={this.onInputChangeHandler.bind(this, "otherSavings")} value={this.state.otherSavings.otherSavingsInput}
                                   aria-describedby="basic-addon1" id="otherSavingsInput" disabled={!this.state.otherSavings.otherSavingsCheckbox} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MonthlySavingsComponent;
