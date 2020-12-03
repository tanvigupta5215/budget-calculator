import React from "react";
import './MonthlyBudgetReviewComponent.css';

class MonthlyBudgetReviewComponent extends React.Component{
    render(){
        return(
            <div className="container">
                <div id="totalMonthlyIncome" className="row">
                <div className="col-6 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="monthlyIncome">
                            <p className="mb-0">Total monthly income=</p>
                        </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="text" className="form-control" placeholder="" aria-label="EnterMonthlyIncome"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div id="totalMonthlyExpenses" className="row">
                <div className="col-6 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="monthlyExpenses">
                            <p className="mb-0">Total monthly expenses=</p>
                        </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="text" className="form-control" placeholder="" aria-label="EnterMonthlyExpenses"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div id="totalAnnualExpenses" className="row">
                <div className="col-6 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="annualExpenses">
                            <p className="mb-0">Total annual expenses=</p>
                        </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="text" className="form-control" placeholder="" aria-label="EnterAnnualExpenses"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div id="totalMonthlySavings" className="row">
                <div className="col-6 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="monthlySavings">
                            <p className="mb-0">Total monthly savings=</p>
                        </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="text" className="form-control" placeholder="" aria-label="EnterMonthlySavings"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <div id="Under/overBudget" className="row">
                <div className="col-6 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="underOverBudget">
                            <p className="mb-0">Under/over budget=</p>
                        </label>
                    </div>
                    <div className="col-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="text" className="form-control" placeholder="" aria-label="underOverbudget"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MonthlyBudgetReviewComponent;