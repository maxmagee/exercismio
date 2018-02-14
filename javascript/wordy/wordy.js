class ArgumentError {
    constructor() {}
};

class WordProblem {
    constructor(question) {
        // Getting rid of the question mark so I can parse numbers more easily
        this.question = question.replace('?', '');
    }
    answer() {
        // We only want 'words' that are operations or are numbers to pass our filter
        const operations = ['plus', 'minus', 'divided', 'multiplied'];
        const numberOrOperatorFilter = (item) => {
            return operations.indexOf(item) > -1 || !isNaN(Number(item))
        };
        const operatorFilter = (item) => {
            return operations.indexOf(item) > -1;
        };

        const performOperation = () => {
            switch (operator) {
                case 'plus':
                    leftNum = leftNum + rightNum;
                    break;
                case 'minus':
                    leftNum = leftNum - rightNum;
                    break;
                case 'multiplied':
                    leftNum = leftNum * rightNum;
                    break;
                case 'divided':
                    leftNum = leftNum / rightNum;
                    break;
                default:
                    throw new ArgumentError();
                    break;
            }
            reset();
        };

        // Resets the rightNum and operator after an operation has been performed
        const reset = () => {
            rightNum = null;
            operator = null;
        };

        // Split the string up by spaces
        // Iterate through each entry trying to convert it to a number or an operator
        // An example input is: 'What is -12 divided by 2 divided by -3?'
        // An example result is: ['-12', 'divided', '2', 'divided', '-3']
        const numbersAndOperatorsArray = this.question.split(' ').filter(numberOrOperatorFilter);
        // Invalid input
        if (numbersAndOperatorsArray.length === 0) { throw new ArgumentError(); }
        // Missing valid operators
        if (numbersAndOperatorsArray.filter(operatorFilter).length === 0) { throw new ArgumentError(); }

        let leftNum = null;     // We'll accumulate our answer in the leftNum variable
        let rightNum = null;
        let operator = null;

        numbersAndOperatorsArray.forEach((item) => {
            if (!isNaN(Number(item))) {     // we read a number in
                if (!leftNum) { leftNum = Number(item); }
                else {
                    // Two numbers need an operator between them
                    if (operator === null) { throw new ArgumentError(); }
                    else {
                        rightNum = Number(item);
                        performOperation();
                    }
                }
            } else {
                operator = item;
            }
        });

        return leftNum;
    }
};

module.exports = {
    ArgumentError: ArgumentError,
    WordProblem: WordProblem
};
