import React from "react";
import labelingData from "../static/initialData";
import ExpandableRowItemComponent from "../expandable-row-item-component/ExpandableRowItemComponent";
class MonthlyExpensesComponent extends React.Component{
    expenseInformation = labelingData.monthlyExpenses;
    constructor(props) {
        super(props);
        this.menuClickHandler = this.menuClickHandler.bind(this);
        this.foodInputChanged = this.foodInputChanged.bind(this);
        this.checkBoxClicked = this.checkBoxClicked.bind(this);
        this.state = {
            foodInput: '',
            menuToggle: false,
            checkBoxState: false
        };
    }

    menuClickHandler(event){
        console.log('Menu Clicked Handler!!');
        console.log(this.state.foodInput);
        event.stopPropagation();
        event.preventDefault();
        this.setState({menuToggle: !this.state.menuToggle});
        // event.stopPropagation();
    }
    componentDidMount() {
        console.log('Component Mounted');

    }

    pushToDataStore(rowData){
        console.log('Parent onUpdateCalled: ', rowData);
    }

    foodInputChanged(event){
       console.log(event, event.target.value);
       this.setState({foodInput: event.target.value});
    }
    checkBoxClicked(event){
        console.log('Checkbox clicked: ', event.target.value, event.target.checked, event.currentTarget, event.target);
        this.setState({checkBoxState: event.target.checked});
    }

    render() {
         return (
                     this.expenseInformation.map((expenseLabel, index) => {
                         expenseLabel.isParent = true;
                         return (
                             <ExpandableRowItemComponent onUpdate={this.pushToDataStore} initialData={expenseLabel} index={index} key={index}/>
                         );
                     })
         );
     }
}

export default MonthlyExpensesComponent;
