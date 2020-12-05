import React from "react";
import './IncomeCalculatorComponent.css';
import BaseComponent from "../base-component/BaseComponent";
class IncomeCalculatorComponent extends BaseComponent {
    componentStateName = 'incomeState';
    constructor(props) {
        super(props);
        this.dataService.incomeComponentStateDataSubscriber.subscribe((incomeData) => {
            this.state = incomeData;
            this.setState(incomeData);
        });
    }

    render() {
        return(
            <div className="container">
                <div id="monthlyPay" className="row">
                    <div className="col-1">
                    <div className="form-check">
                       <input className="form-check-input input-styling mt-2" type="checkbox" onChange={this.onCheckboxChangeHandler.bind(this, "takeHomePay")} checked={this.state.takeHomePay.takeHomePayCheckbox} value="on" id="takeHomePayCheckbox" />
                    </div>
                    </div>
                    <div className="col-4 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="takeHomePayCheckbox">
                            <p className="mb-0">Monthly pay=</p>
                            <p className="text-small">(take home pay)</p>
                        </label>
                    </div>
                    <div className="col-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="number" className="form-control" onChange={this.onInputChangeHandler.bind(this, "takeHomePay")} value={this.state.takeHomePay.takeHomePayInput} placeholder="" aria-label="Enter Monthly pay"
                                   aria-describedby="basic-addon1" id="takeHomePayInput" disabled={!this.state.takeHomePay.takeHomePayCheckbox} />
                        </div>
                    </div>
                </div>
                <hr/>
                <div id="monthlyOtherIncomeItem" className="row">
                    <div className="col-1">
                        <div className="form-check">
                            <input className="form-check-input input-styling mt-2" type="checkbox"
                                   onChange={this.onCheckboxChangeHandler.bind(this, "monthlyOtherIncome")} checked={this.state.monthlyOtherIncome.monthlyOtherIncomeCheckbox} value="on" id="monthlyOtherIncomeCheckbox" />
                        </div>
                    </div>
                    <div className="col-4 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="monthlyOtherIncome">
                            <p className="mb-0">Monthly other =</p>
                            <p className="text-small">(rental income, alimony, etc)</p>
                        </label>
                    </div>
                    <div className="col-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="number" className="form-control"  onChange={this.onInputChangeHandler.bind(this, "monthlyOtherIncome")} value={this.state.monthlyOtherIncome.monthlyOtherIncomePayInput} placeholder="" aria-label="monthlyOtherIncome"
                                   aria-describedby="basic-addon1" id="monthlyOtherIncomePayInput" disabled={!this.state.monthlyOtherIncome.monthlyOtherIncomeCheckbox} />
                        </div>
                    </div>
                </div>
                <hr/>
                <div id="annualOtherIncomeItem" className="row">
                    <div className="col-1">
                        <div className="form-check">
                            <input className="form-check-input input-styling mt-2" type="checkbox"
                                   onChange={this.onCheckboxChangeHandler.bind(this, "annualOtherIncome")} checked={this.state.annualOtherIncome.annualOtherIncomeCheckbox} value="on" id="annualOtherIncomeCheckbox" />
                        </div>
                    </div>
                    <div className="col-4 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="annualOtherIncome">
                            <p className="mb-0">Annual other =</p>
                            <p className="text-small">(bonuses, gifts, tax refund, etc.)
                            </p>
                        </label>
                    </div>
                    <div className="col-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="number" className="form-control" placeholder="" onChange={this.onInputChangeHandler.bind(this, "annualOtherIncome")} value={this.state.annualOtherIncome.annualOtherIncomeInput} aria-label="annualOtherIncome"
                                   aria-describedby="basic-addon1" id="annualOtherIncomeInput" disabled={!this.state.annualOtherIncome.annualOtherIncomeCheckbox} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IncomeCalculatorComponent;
