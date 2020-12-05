import React from "react";
import labelingData from "../static/initialData";
import ExpandableRowItemComponent from "../expandable-row-item-component/ExpandableRowItemComponent";
import './AnnualExpensesComponent.css';
class AnnualExpensesComponent extends React.Component{
    #dataService;
    expenseInformation = labelingData.annualExpenses;

    constructor(props) {
        super(props);
        this.state = {};
        this.#dataService = props.dataManagerService;

    }

    pushToDataStore(rowData){
        console.log('Parent onUpdateCalled: ', rowData);
        this.#dataService.annualExpenseState[rowData.name] = rowData;
        this.#dataService.updateBudgetReview();
    }
    addButtonClickHandler(event){
        console.log('Button Clicked');
       this.expenseInformation.push({
                name: '',
                label: '',
                enabled: true,
                value: '',
                itemId: 'item-' + new Date().getTime(),
                isCustomAdded: true,
                isEditable: true,
                on: true
            });
       this.forceUpdate();
       // this.setState(this.state);
    }
    deleteIconHandler(event){
        console.log("Deleting...");
        const itemIndex = this.expenseInformation.findIndex((item) => {
            return item.itemId === event.currentTarget.id;
        });
        delete this.#dataService.annualExpenseState[this.expenseInformation[itemIndex].name];
        this.expenseInformation.splice(itemIndex, 1);
        this.forceUpdate();
        this.#dataService.updateBudgetReview();
        this.setState(this.state);
    }

    render() {
        return (
               <div>
                   {
                       this.expenseInformation.map((expenseLabel, index) => {
                           expenseLabel = this.#dataService.annualExpenseState[expenseLabel.name] || expenseLabel;
                           expenseLabel.isParent = true;
                           return (
                                   <ExpandableRowItemComponent dataManagerService={this.props.dataManagerService} deleteHandler={this.deleteIconHandler.bind(this)} onUpdate={this.pushToDataStore.bind(this)} initialData={expenseLabel} index={index} key={index}/>
                           );
                       })
                   }
                   {
                       <div className="row">
                           <button onClick={this.addButtonClickHandler.bind(this)} className="add-btn ml-4">+</button>
                       </div>
                   }
               </div>
        );
    }
}

export default AnnualExpensesComponent;
