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
    monthlyExpenseState = {

    };
    annualExpenseState = {

    };

    #monthlyBudgetReviewState = {
        totalMonthlyIncome: '',
        totalMonthlyExpenses: '',
        totalAnnualExpense: '',
        totalMonthlySavings: '',
        finalBudgetValue: ''
    };
    #incomeComponentStatePublisher;
    incomeComponentStateDataSubscriber;
    #monthlySavingsStatePublisher;
    monthlySavingsStateDataSubscriber;

    #monthlyBudgetReviewPublisher;
    monthlyBudgetReviewDataSubscriber;
    constructor() {
        this.#incomeComponentStatePublisher = new BehaviorSubject(this.#incomeComponentState);
        this.incomeComponentStateDataSubscriber = this.#incomeComponentStatePublisher.asObservable();

        this.#monthlySavingsStatePublisher = new BehaviorSubject(this.#monthlySavingsState);
        this.monthlySavingsStateDataSubscriber = this.#monthlySavingsStatePublisher.asObservable();

        this.#monthlyBudgetReviewPublisher = new BehaviorSubject(this.#monthlyBudgetReviewState);
        this.monthlyBudgetReviewDataSubscriber = this.#monthlyBudgetReviewPublisher.asObservable();
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

    getTotalExpenseOfaCategory(category){
       let result = 0;
       Object.values(category).forEach((expenseCategory) => {
           result = Number(result) + (expenseCategory.on ? Number(expenseCategory.value) : 0);
       });
        return (result > 0 ? result : '');

    }

    updateBudgetReview(){
        console.log('Updating Budget', this.#incomeComponentState, this.monthlyExpenseState, this.annualExpenseState, this.#monthlySavingsState);
        this.#monthlyBudgetReviewState.totalMonthlyIncome =
              (this.#incomeComponentState.takeHomePay.takeHomePayCheckbox ? Number(this.#incomeComponentState.takeHomePay.takeHomePayInput) : 0)
            + (this.#incomeComponentState.monthlyOtherIncome.monthlyOtherIncomeCheckbox ? Number(this.#incomeComponentState.monthlyOtherIncome.monthlyOtherIncomePayInput) : 0)
            + (this.#incomeComponentState.annualOtherIncome.annualOtherIncomeCheckbox ? Number(this.#incomeComponentState.annualOtherIncome.annualOtherIncomeInput)/12 : 0);
        this.#monthlyBudgetReviewState.totalMonthlyExpenses = this.getTotalExpenseOfaCategory(this.monthlyExpenseState);
        this.#monthlyBudgetReviewState.totalAnnualExpense = this.getTotalExpenseOfaCategory(this.annualExpenseState);
        this.#monthlyBudgetReviewState.totalMonthlySavings =
            (this.#monthlySavingsState.retirementSavings.retirementSavingsCheckbox ? Number(this.#monthlySavingsState.retirementSavings.retirementSavingsInput) : 0)
           + (this.#monthlySavingsState.otherSavings.otherSavingsCheckbox ? Number(this.#monthlySavingsState.otherSavings.otherSavingsInput) : 0);

        this.#monthlyBudgetReviewState.finalBudgetValue = this.#monthlyBudgetReviewState.totalMonthlyIncome
            - this.#monthlyBudgetReviewState.totalMonthlyExpenses
            - this.#monthlyBudgetReviewState.totalAnnualExpense
           - this.#monthlyBudgetReviewState.totalMonthlySavings;

        this.#monthlyBudgetReviewState.totalMonthlyIncome = (this.#monthlyBudgetReviewState.totalMonthlyIncome > 0) ? this.#monthlyBudgetReviewState.totalMonthlyIncome : '';
        this.#monthlyBudgetReviewState.totalMonthlySavings = (this.#monthlyBudgetReviewState.totalMonthlySavings > 0) ? this.#monthlyBudgetReviewState.totalMonthlySavings : '';

        this.#monthlyBudgetReviewPublisher.next(this.#monthlyBudgetReviewState);

    }
}

export default DataManagerService;
