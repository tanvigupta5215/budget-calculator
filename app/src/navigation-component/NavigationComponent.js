import React from "react";
import { Link, BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import IncomeCalculatorComponent from "../income-calculator-component/IncomeCalculatorComponent";
import FlowerPotIcon from "../static/FlowerPotIcon.svg";
import Plant from "../static/Plant";
import Wallet from "../static/Wallet";
import PiggyBank from "../static/PiggyBank";
import './NavigationComponent.css';

class NavigationComponent extends React.Component{
   render() {
       return (
           <div id="navigationComponent" className="container">
               <Router>
                   <div className="row">
                       <div className="col-3">
                           <nav>
                               <ul className="text-left list-group-flush">
                                   <li className="list-group-item">
                                   {/*<img className="plant-icon" src= {FlowerPotIcon} alt=""/>*/}
                                   <Plant/>
                                       <Link to="/income">
                                        Income
                                   </Link>
                                   </li>
                                   <li className="list-group-item">
                                       <Wallet/>
                                       <NavLink to="/monthly-expenses">
                                           Monthly Expenses
                                       </NavLink>
                                       </li>
                                   <li className="list-group-item">
                                       <Wallet/>
                                       <NavLink to="/annual-expenses">
                                           Annual Expenses
                                       </NavLink>
                                       </li>
                                   <li className="list-group-item">
                                       <PiggyBank/>
                                       <NavLink to="/monthly-savings">
                                           Monthly Savings
                                       </NavLink>
                                       </li>
                               </ul>
                           </nav>
                       </div>
                       <div className="col-9">
                           <Route exact path="/income">
                               <IncomeCalculatorComponent/>
                           </Route>
                       </div>
                   </div>
               </Router>
           </div>
       );
   }
}

export default NavigationComponent;
