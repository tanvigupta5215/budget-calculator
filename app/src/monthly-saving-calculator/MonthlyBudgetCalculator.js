import React from "react";
import './MonthlyBudgetCalculator.css';
class MonthlyBudgetCalculator extends React.Component {
    render() {
        return(
            <div className="container">
                <div id="monthlyPay" className="row">
                    <div className="col-1">
                    <div className="form-check">
                       <input className="form-check-input input-styling mt-2" type="checkbox" color="black" value="" id="takeHomePay" />
                    </div>
                    </div>
                    <div className="col-3 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="takeHomePay">
                            <p className="mb-0">Monthly pay=</p>
                            <p className="text-small">(take home pay)</p>
                        </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="text" className="form-control" placeholder="" aria-label="Enter Monthly pay"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div id="monthlyOtherIncome" className="row">
                    <div className="col-1">
                        <div className="form-check">
                            <input className="form-check-input input-styling mt-2" type="checkbox" color="black" value="" id="takeHomePay" />
                        </div>
                    </div>
                    <div className="col-3 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="takeHomePay">
                            <p className="mb-0">Monthly other =</p>
                            <p className="text-small">(rental income, alimony, etc)</p>
                        </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="text" className="form-control" placeholder="" aria-label="Enter Monthly pay"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div id="annualOtherIncome" className="row">
                    <div className="col-1">
                        <div className="form-check">
                            <input className="form-check-input input-styling mt-2" type="checkbox" color="black" value="" id="takeHomePay" />
                        </div>
                    </div>
                    <div className="col-3 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="takeHomePay">
                            <p className="mb-0">Annual other =</p>
                            <p className="text-small">(bonuses, gifts, tax refund, etc.)
                            </p>
                        </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="text" className="form-control" placeholder="" aria-label="Enter Monthly pay"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default MonthlyBudgetCalculator;
