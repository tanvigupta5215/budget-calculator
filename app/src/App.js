// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
// eslint-disable-next-line no-unused-vars
import Button from "react-bootstrap/button";
import React from "react";
// import IncomeCalculatorComponent from "./income-calculator-component/IncomeCalculatorComponent";
import MonthlySavingsComponent from "./monthly-savings-component/MonthlySavingsComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Budget Calculator
                </header>
                <div className="bg-white">
                <MonthlySavingsComponent />
                </div>
            </div>
        );
    }
}

export default App;
