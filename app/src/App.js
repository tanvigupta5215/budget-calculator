import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css';
import NavigationComponent from "./navigation-component/NavigationComponent";
import MonthlyBudgetReviewComponent from './monthly-budget-review-component/MonthlyBudgetReviewComponent';


class App extends React.Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Budget Calculator
                </header>
                <div className="row bg-white mt-5">
                <div className="col-md-12 col-xs-12 col-lg-7">
                <NavigationComponent/>
                </div>
                <div className="col-lg-5 col-xl-5">
                <MonthlyBudgetReviewComponent />
                </div>
                </div>
            </div>
        );
    }
}

export default App;
