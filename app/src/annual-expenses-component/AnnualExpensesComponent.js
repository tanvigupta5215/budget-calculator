import React from "react";
import labelingData from "../static/initialData";
import ExpandableRowItemComponent from "../expandable-row-item-component/ExpandableRowItemComponent";
class AnnualExpensesComponent extends React.Component{
    #dataService;
    expenseInformation = labelingData.annualExpenses;
    constructor(props) {
        super(props);
        this.#dataService = props.dataManagerService;
    }

    pushToDataStore(rowData){
        console.log('Parent onUpdateCalled: ', rowData);
        this.#dataService.annualExpenseState[rowData.name] = rowData;
        this.#dataService.updateBudgetReview();
    }

    render() {
        return (
            this.expenseInformation.map((expenseLabel, index) => {
                expenseLabel = this.#dataService.annualExpenseState[expenseLabel.name] || expenseLabel;
                expenseLabel.isParent = true;
                return (
                    <ExpandableRowItemComponent onUpdate={this.pushToDataStore.bind(this)} initialData={expenseLabel} index={index} key={index}/>
                );
            })
        );
    }
}

export default AnnualExpensesComponent;
