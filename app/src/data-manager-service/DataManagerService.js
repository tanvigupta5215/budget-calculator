import { BehaviorSubject } from 'rxjs';
class DataManagerService {
    static #instance;
    #incomeComponentState = {
        takeHomePay: {
            takeHomePayCheckbox: true,
            takeHomePayInput: ''
        },
        monthlyOtherIncome:{
            monthlyOtherIncomeCheckbox: false,
            monthlyOtherIncomePayInput: ''
        },
        annualOtherIncome:{
            annualOtherIncomeCheckbox: false,
            annualOtherIncomeInput: ''
        }
    };
    #monthlySavingsState = {
        retirementSavings:{
            retirementSavingsCheckbox: true,
            retirementSavingsInput: ''
        },
        otherSavings: {
            otherSavingsCheckbox: false,
            otherSavingsInput: ''
        }
    };
    #incomeComponentStatePublisher;
    incomeComponentStateDataSubscriber;
    #monthlySavingsStatePublisher;
    monthlySavingsStateDataSubscriber;
    constructor() {
        this.#incomeComponentStatePublisher = new BehaviorSubject(this.#incomeComponentState);
        this.incomeComponentStateDataSubscriber = this.#incomeComponentStatePublisher.asObservable();

        this.#monthlySavingsStatePublisher = new BehaviorSubject(this.#monthlySavingsState);
        this.monthlySavingsStateDataSubscriber = this.#monthlySavingsStatePublisher.asObservable();
    }

    static getInstance() {
        if(!DataManagerService.#instance){
            DataManagerService.#instance = new DataManagerService();
        }
        return DataManagerService.#instance;
    }

    set incomeState(data){
        this.#incomeComponentState = data;
    }

    set monthlySavingsState(data){
        this.#monthlySavingsState = data;
    }
}

export default DataManagerService;
