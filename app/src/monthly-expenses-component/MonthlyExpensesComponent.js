import React from "react";
import labelingData from "../static/initialData";
import ExpandableRowItemComponent from "../expandable-row-item-component/ExpandableRowItemComponent";
class MonthlyExpensesComponent extends React.Component{
    #dataService;
    expenseInformation = labelingData.monthlyExpenses;
    constructor(props) {
        super(props);
        this.#dataService = props.dataManagerService;
    }

    pushToDataStore(rowData){
        console.log('Parent onUpdateCalled: ', rowData);
        this.#dataService.monthlyExpenseState[rowData.name] = rowData;
        this.#dataService.updateBudgetReview();
    }

    render() {
         return (
                     this.expenseInformation.map((expenseLabel, index) => {
                         expenseLabel = this.#dataService.monthlyExpenseState[expenseLabel.name] || expenseLabel;
                         expenseLabel.isParent = true;
                         return (
                             <ExpandableRowItemComponent onUpdate={this.pushToDataStore.bind(this)} initialData={expenseLabel} index={index} key={index}/>
                         );
                     })
         );
     }
}

export default MonthlyExpensesComponent;
