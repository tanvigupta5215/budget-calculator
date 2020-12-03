// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
// eslint-disable-next-line no-unused-vars
import Button from "react-bootstrap/button";
import React from "react";
import NavigationComponent from "./navigation-component/NavigationComponent";
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
                    <NavigationComponent/>
                </div>
            </div>
        );
    }
}

export default App;
