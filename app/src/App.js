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
                <div className="bg-white">
                <MonthlyBudgetReviewComponent />
                    <NavigationComponent/>
                </div>
            </div>
        );
    }
}

export default App;
