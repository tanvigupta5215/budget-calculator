import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import IncomeCalculatorComponent from "../income-calculator-component/IncomeCalculatorComponent";
import Plant from "../static/Plant";
import Wallet from "../static/Wallet";
import PiggyBank from "../static/PiggyBank";
import MonthlySavingsComponent from "../monthly-savings-component/MonthlySavingsComponent";
import MonthlyExpensesComponent from "../monthly-expenses-component/MonthlyExpensesComponent";
import AnnualExpensesComponent from "../annual-expenses-component/AnnualExpensesComponent";
import './NavigationComponent.css';

class NavigationComponent extends React.Component{
   render() {
       return (
           <div id="navigationComponent" className="container">
               <Router>
                   <div className="row mt-5">
                       <div className="col-lg-4 col-xl-4 col-md-5 col-sm-6">
                           <nav className="nav">
                               <ul className="text-left list-group-flush">
                                       <li className="list-group-item nav-item border-0 p-0" >
                                           <NavLink className="nav-link" to="/income">
                                               <Plant/> Income
                                           </NavLink>
                                       <div className="pointer"> </div>
                                       </li>
                                   <li className="list-group-item nav-item border-0 p-0">
                                       <NavLink className="nav-link" to="/monthly-expenses">
                                           <Wallet/> Monthly Expenses
                                       </NavLink>
                                       <div className="pointer"> </div>
                                       </li>
                                   <li className="list-group-item nav-item border-0 p-0">
                                       <NavLink className="nav-link" to="/annual-expenses">
                                           <Wallet/>
                                           Annual Expenses
                                       </NavLink>
                                       <div className="pointer"> </div>
                                       </li>
                                   <li className="list-group-item nav-item border-0 p-0">
                                       <NavLink className="nav-link" to="/monthly-savings">
                                           <PiggyBank/>
                                           Monthly Savings
                                       </NavLink>
                                       <div className="pointer"> </div>
                                       </li>
                               </ul>
                           </nav>
                       </div>
                       <div className="col-lg-8 col-xl-8 col-md-7 col-sm-6">
                           <Route exact path="/income">
                               <IncomeCalculatorComponent dataManagerService={this.props.dataManagerService}/>
                           </Route>
                           <Route exact path="/monthly-expenses">
                               <MonthlyExpensesComponent dataManagerService={this.props.dataManagerService} />
                           </Route>
                           <Route exact path="/annual-expenses">
                               <AnnualExpensesComponent dataManagerService={this.props.dataManagerService}/>
                           </Route>
                           <Route exact path="/monthly-savings">
                               <MonthlySavingsComponent dataManagerService={this.props.dataManagerService}/>
                           </Route>
                       </div>
                   </div>
               </Router>
           </div>
       );
   }
}

export default NavigationComponent;
