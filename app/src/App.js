// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
// eslint-disable-next-line no-unused-vars
import Button from "react-bootstrap/button";
import './App.css';
import React from "react";
import MonthlyBudgetCalculator from "./monthly-saving-calculator/MonthlyBudgetCalculator";


class App extends React.Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Budget Calculator
                </header>
                <MonthlyBudgetCalculator />
            </div>
        );
    }
}

export default App;
