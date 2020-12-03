// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
// eslint-disable-next-line no-unused-vars
import Button from "react-bootstrap/button";
import React from "react";
<<<<<<< HEAD
// import IncomeCalculatorComponent from "./income-calculator-component/IncomeCalculatorComponent";
//import MonthlySavingsComponent from "./monthly-savings-component/MonthlySavingsComponent";
=======
import NavigationComponent from "./navigation-component/NavigationComponent";
>>>>>>> d92899dc6c6a8eb30581225699980055f602354f
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MonthlyBudgetReviewComponent from './monthly-budget-review-component/MonthlyBudgetReviewComponent';


class App extends React.Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Budget Calculator
                </header>
                <div className="bg-white">
<<<<<<< HEAD
                <MonthlyBudgetReviewComponent />
=======
                    <NavigationComponent/>
>>>>>>> d92899dc6c6a8eb30581225699980055f602354f
                </div>
            </div>
        );
    }
}

export default App;
