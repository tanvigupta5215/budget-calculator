import React from "react";
import './MonthlyBudgetReviewComponent.css';

class MonthlyBudgetReviewComponent extends React.Component{
    #dataService;
    constructor(props) {
        super(props);
        this.state =  {
            totalMonthlyIncome: '',
            totalMonthlyExpenses: '',
            totalAnnualExpense: '',
            totalMonthlySavings: '',
            finalBudgetValue: ''
        };
        this.#dataService = this.props.dataManagerService;
        this.#dataService.monthlyBudgetReviewDataSubscriber.subscribe((monthlyReviewState) => {
            console.log('MBR Recieved Date: ', monthlyReviewState);
            this.state = monthlyReviewState;
            this.setState(monthlyReviewState);
        });
    }

    render(){
        return(
            <div id="monthlyBudgetReviewItem" className="container">
                <div className="row">
                    <div className=" col pt-3 pb-3 heading text-center">Monthly Budget Review</div>
                </div>
                <hr/>
                <div id="totalMonthlyIncome" className="row">
                <div className="col-5 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="monthlyIncome">
                            <p className="mb-0">Total monthly income=</p>
                        </label>
                    </div>
                    <div className="col-3 offset-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input readOnly type="text" className="form-control" placeholder="" value={this.state.totalMonthlyIncome} aria-label="EnterMonthlyIncome"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <hr/>
                <div id="totalMonthlyExpenses" className="row">
                <div className="col-5 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="monthlyExpenses">
                            <p className="mb-0">Total monthly expenses=</p>
                        </label>
                    </div>
                    <div className="col-3 offset-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input readOnly type="text" className="form-control" placeholder="" value={this.state.totalMonthlyExpenses} aria-label="EnterMonthlyExpenses"
                                   aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
                <hr/>
                <div id="totalAnnualExpenses" className="row">
                <div className="col-5 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="annualExpenses">
                            <p className="mb-0">Total annual expenses=</p>
                        </label>
                    </div>
                    <div className="col-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input readOnly type="text" className="form-control" placeholder="" value={this.state.totalAnnualExpense} aria-label="EnterAnnualExpenses"
                                   aria-describedby="basic-addon1" />
                                   <label className="form-check-label" id="defaultCheck1" htmlFor="annualExpenses">
                            <p className="mb-0"> /12=</p>
                        </label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input readOnly type="text" className="form-control" placeholder="" aria-label="EnterAnnualExpense"
                                   aria-describedby="basic-addon1" value={(this.state.totalAnnualExpense/12 > 0) ? this.state.totalAnnualExpense/12 :''} />
                                   
                        </div>
                    </div>
                </div>
                <div id="totalMonthlySavings" className="row">
                <div className="col-5 text-left">
                        <label className="form-check-label" id="defaultCheck1" htmlFor="monthlySavings">
                            <p className="mb-0">Total monthly savings=</p>
                        </label>
                    </div>
                    <div className="col-3 offset-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input readOnly type="text" className="form-control" placeholder="" aria-label="EnterMonthlySavings"
                                   aria-describedby="basic-addon1" value={this.state.totalMonthlySavings} />
                        </div>
                    </div>
                </div>
                <div id="UnderoverBudgetItem" className={`${this.state.finalBudgetValue < 0 ? 'row bg-danger pt-3' : 'row final-result pt-3'}`}>
                <div className="col-5 text-left">
                        <label className="form-check-label text-white" id="defaultCheck1" htmlFor="underOverBudget">
                            <p className="mb-0">Under/over budget=</p>
                        </label>
                    </div>
                    <div className="col-3 offset-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input readOnly type="text" id="budgetResultInput" className="form-control" placeholder="" aria-label="underOverbudget"
                                   aria-describedby="basic-addon1" value={this.state.finalBudgetValue === 0 ? '0.00' : this.state.finalBudgetValue}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MonthlyBudgetReviewComponent;
