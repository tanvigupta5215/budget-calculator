import React from "react";
class BaseComponent extends React.Component{
    dataService;
    constructor(props) {
        super(props);
        this.dataService = this.props.dataManagerService;
    }
    onCheckboxChangeHandler(rowKey, event){
        this.setState(() => {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state[rowKey][event.target.id] = event.target.checked;
            this.pushStateChangeToDataManager();
            return this.state;
        });
    }

    onInputChangeHandler(rowKey, event){
        this.setState(() => {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state[rowKey][event.target.id] = event.target.value;
            this.pushStateChangeToDataManager();
            return this.state;
        });
    }

    pushStateChangeToDataManager() {
        this.dataService[this.componentStateName] = this.state;
        this.dataService.updateBudgetReview();
    }
}

export default BaseComponent;
