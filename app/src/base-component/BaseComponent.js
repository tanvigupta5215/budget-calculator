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
            return this.state;
        });
        this.pushStateChangeToDataManager();
    }

    onInputChangeHandler(rowKey, event){
        this.setState(() => {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state[rowKey][event.target.id] = event.target.value;
            return this.state;
        });
        this.pushStateChangeToDataManager();
    }

    pushStateChangeToDataManager() {
        this.dataService[this.componentStateName] = this.state;
    }
}

export default BaseComponent;
