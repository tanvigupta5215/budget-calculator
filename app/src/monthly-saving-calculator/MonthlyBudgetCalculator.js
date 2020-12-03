import React from "react";
class MonthlyBudgetCalculator extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                       <label class="form-check-label" for="defaultCheck1">
                            <p>Monthly pay=</p>
                            <p>(take home pay)</p>
                       </label>
                    </div>
                    </div> 
                </div>

            </div>
        );
    }
}

export default MonthlyBudgetCalculator;
