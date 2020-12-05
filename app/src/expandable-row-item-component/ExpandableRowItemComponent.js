import React from "react";
import Arrow from "../static/Arrow";
import './ExpandableRowItemComponent.css';
class ExpandableRowItemComponent extends React.Component {
    initialData;
    hasChildren;
    numberRegex = /^[\d]+$/
    constructor(props) {
        super(props);
        this.initialData = props.initialData;
        this.hasChildren = (this.initialData.items !== undefined && this.initialData.items.length > 0);
        this.initialData.items = this.initialData.items ? this.initialData.items : [];
        this.state = {
            menuToggle: this.initialData.enabled,
            inputValue: this.initialData.value,
            checkBoxState: this.initialData.on ? this.initialData.on : false
        };
    }

    menuClickHandler(event){
        console.log('Menu Clicked Handler!!');
        event.stopPropagation();
        event.preventDefault();
        this.setState((prevState) => {
            console.log(this.state.menuToggle, prevState.menuToggle);
             // eslint-disable-next-line react/no-direct-mutation-state
            prevState.menuToggle = !prevState.menuToggle;
            this.initialData.on = prevState.checkBoxState;
            this.initialData.value = prevState.inputValue;
            this.initialData.enabled = prevState.menuToggle;
            this.props.onUpdate(this.initialData);
             return {...prevState};
        });

        // event.stopPropagation();
    }

    checkBoxHandler(event){
        this.setState((prevState) => {
            // eslint-disable-next-line react/no-direct-mutation-state
            prevState.checkBoxState = event.target.checked;
            this.initialData.on = prevState.checkBoxState;
            this.initialData.value = prevState.inputValue;
            this.initialData.enabled = prevState.menuToggle;
            if(this.initialData.isChild){
                this.props.updateParentValue();
            }
            this.props.onUpdate(this.initialData);
            return {...prevState};
        });

    }

    onChangeInputHandler(event){
        this.setState((prevState) => {
            // eslint-disable-next-line react/no-direct-mutation-state
            console.log('event val: ', event.target.value);
            // if(this.numberRegex.test(event.target.value)) {
            prevState.inputValue = event.target.value;
            // }
            this.initialData.on = prevState.checkBoxState;
            this.initialData.value = prevState.inputValue;
            this.initialData.enabled = prevState.menuToggle;
            this.props.onUpdate(this.initialData);
            if(this.initialData.isChild){
                this.props.updateParentValue();
            }
            return {...prevState};
        });


    }

    onUpdateHandler(rowData){
      // console.log('Child onUpdateCalled: ', rowData);
      this.props.onUpdate(this.initialData);
    }

    updateParentInput(){
        this.setState((prevState) => {
            let inputValue = '';
            this.initialData.items.forEach((item) => {
                console.log('itemValue: ', item.value);
                inputValue = Number(inputValue) + (item.on ?Number(item.value): 0);
            });
            prevState.inputValue = (inputValue > 0) ? inputValue : '';
            console.log(this.initialData);
            this.initialData.on = prevState.checkBoxState;
            this.initialData.value = prevState.inputValue;
            this.initialData.enabled = prevState.menuToggle;
            this.props.onUpdate(this.initialData);
            return {...prevState};
        });
    }

    render() {
        return(
            <div className="container">
                <div id="expenseItem" className={`${this.props.isChild ? 'row ml-5': 'row' }`}>
                    <div className="col-1">
                        <div className="form-check">
                            <input className="form-check-input input-styling mt-2"  onChange={this.checkBoxHandler.bind(this)}  checked={this.state.checkBoxState} type="checkbox" />
                        </div>
                    </div>
                    <div className={`${this.props.isChild ? 'col-5 text-left' : 'col-4 text-left'}`}>
                        <label tabIndex="-1" onClickCapture={this.menuClickHandler.bind(this)} className="form-check-label" id="defaultCheck1" htmlFor="monthlyOtherIncome">
                            { this.hasChildren ? <span className="mr-2"><Arrow on={this.state.menuToggle}/></span> : null}
                            <span> {this.initialData.label}=</span>
                            {this.initialData.description ? <p className="text-small off">{this.initialData.description}</p> : null}
                        </label>
                    </div>
                    <div className={`${this.props.isChild ? 'col-3' : 'col-3 offset-1'}`}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">$</span>
                            </div>
                            <input type="number" readOnly={this.hasChildren} className="form-control" onChange={this.onChangeInputHandler.bind(this)} value={this.state.inputValue} placeholder="" aria-label={this.initialData.label}
                                   aria-describedby="basic-addon1" disabled={!this.state.checkBoxState} />
                        </div>
                    </div>
                </div>
                {
                    this.state.menuToggle ?   <div className="row">
                        {
                            this.initialData.items.map((item, index) => {
                                item.isChild = true;
                                return (
                                    <ExpandableRowItemComponent updateParentValue={this.updateParentInput.bind(this)} onUpdate={this.onUpdateHandler.bind(this)} initialData={item} index={index} key={index} isChild={true}/>
                                );
                            })
                        }
                    </div>: null
                }
            </div>
        );
    }

}

export default ExpandableRowItemComponent;
