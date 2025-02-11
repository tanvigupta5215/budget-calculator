const labelingData = {
    monthlySavings: [
        {
            name: 'retirement',
            label: 'Retirement savings',
            description: '(RRSP, TFSA, Non-reg, etc.)',
            enabled: true,
            value: '',
        },
        {
            name: 'other',
            label: 'Other',
            description: '(trips, cars, etc.)',
            enabled: false,
            value: '',
        },
    ],
    monthlyExpenses: [
        {
            name: 'food',
            id: 'foodItem',
            label: 'Food',
            enabled: true,
            value: '',
            on: true,
            canAddMore: true,
            items: [
                {
                    name: 'groceries',
                    label: 'Groceries',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'diningOut',
                    label: 'Dining out',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'snacks',
                    label: 'Snacks',
                    enabled: false,
                    value: '',
                },
            ],
        },
        {
            name: 'clothing',
            id: 'clothingItem',
            label: 'Clothing',
            description: '(shirts, pants, socks, etc.)',
            enabled: false,
            value: '',
        },
        {
            name: 'shelter',
            label: 'Shelter',
            enabled: false,
            value: '',
            canAddMore: true,
            items: [
                {
                    name: 'mortgage',
                    label: 'Mortgage',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'rent',
                    label: 'Rent',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'taxes',
                    label: 'Taxes',
                    enabled: false,
                    value: '',
                },
            ],
        },

        {
            name: 'household',
            label: 'Household',
            enabled: false,
            value: '',
            canAddMore: true,
            items: [
                {
                    name: 'utilities',
                    label: 'Utilities',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'cellPhone',
                    label: 'Cell Phone',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'cable',
                    label: 'Cable',
                    enabled: false,
                    value: '',
                },
            ],
        },
        {
            name: 'transportation',
            label: 'Transportation',
            enabled: false,
            value: '',
            canAddMore: true,
            items: [
                {
                    name: 'publicTransit',
                    label: 'Public Transit',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'gas',
                    label: 'Gas',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'parking',
                    label: 'Parking',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'insurance',
                    label: 'Insurance',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'maintenance',
                    label: 'Maintenance',
                    enabled: false,
                    value: '',
                },
            ],
        },
        {
            name: 'health',
            label: 'Healthcare',
            enabled: false,
            value: '',
            canAddMore: true,
            items: [
                {
                    name: 'physio',
                    label: 'Physio',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'chiropractor',
                    label: 'Chiropractor',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'acupuncture',
                    label: 'Acupuncture',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'medication',
                    label: 'Medication',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'massage',
                    label: 'Massage',
                    enabled: false,
                    value: '',
                },
            ],
        },
        {
            name: 'loans',
            label: 'Loans',
            enabled: false,
            value: '',
            canAddMore: true,
            items: [
                {
                    name: 'lineOfCredit',
                    label: 'Line of credit',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'carPayments',
                    label: 'Car payments',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'creditCardPayments',
                    label: 'Credit card payments',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'studentLoan',
                    label: 'Student loan',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'otherLoan',
                    label: 'Other loan',
                    enabled: false,
                    value: '',
                },
            ],
        },
        {
            name: 'personal',
            label: 'Personal',
            enabled: false,
            value: '',
            canAddMore: true,
            items: [
                {
                    name: 'gifts',
                    label: 'Gifts',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'charity',
                    label: 'Charity',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'entertainment',
                    label: 'Entertainment',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'hobbies',
                    label: 'Hobbies',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'subscriptions',
                    label: 'Subscriptions',
                    enabled: false,
                    value: '',
                },
            ],
        },
        {
            name: 'childcare',
            label: 'Childcare',
            enabled: false,
            value: ''
        },
        {
            name: 'vice',
            label: 'Vice',
            enabled: false,
            value: '',
            canAddMore: true,
            items: [
                {
                    name: 'alcohol',
                    label: 'Alcohol',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'smokes',
                    label: 'Smokes',
                    enabled: false,
                    value: '',
                },
                {
                    name: 'gambling',
                    label: 'Gambling',
                    enabled: false,
                    value: '',
                },
            ],
        },
    ],
    annualExpenses: [
        {
            name: 'tuition',
            label: 'Tuition',
            on: true,
            value: '',
        },
        {
            name: 'taxes',
            label: 'Taxes',
            on: false,
            value: '',
        },
        {
            name: 'vacation',
            label: 'Vacation',
            on: false,
            value: '',
        },
        {
            name: 'medical',
            label: 'Medical',
            description: '(eye exam, dentist, etc.)',
            on: false,
            value: '',
        },
    ],
    income: [
        {
            name: 'monthlyPay',
            label: 'Monthly pay',
            description: '(take home pay)',
            enabled: true,
            value: '',
        },
        {
            name: 'monthlyOther',
            label: 'Monthly other',
            description: '(rental income, alimony, etc.)',
            enabled: false,
            value: '',
        },
        {
            name: 'annualOther',
            label: 'Annual other',
            description: '(bonuses, gifts, tax refund, etc.)',
            enabled: false,
            value: '',
        },
    ],
};
export default labelingData;
