class List {
    constructor(values) {
        this.values = values || [];
    }
    // Compares A to B ignoring extra indecies of B
    _arrayAinArrayB(arrayA, arrayB) {
        return arrayA.every((value, index) => {
            return arrayB[index] === value;
        });
    }
    // Slides the smaller array along the larger array to look for a the contents of the smaller in the larger
    _arrayShiftCompare(smallArray, largeArray, comparisonSuccessResultType, comparisonFailureResultType) {
        for (let sliceIndex = 0; sliceIndex <= largeArray.length - smallArray.length; sliceIndex++) {
            let successResult = this._arrayAinArrayB(smallArray, largeArray.slice(sliceIndex));
            if (successResult) { return comparisonSuccessResultType; }
        }
        return comparisonFailureResultType;
    }
    compare(listTwo) {
        const COMPARE_RESULT_TYPES = {
            equal: 'EQUAL',
            sublist: 'SUBLIST',
            superlist: 'SUPERLIST',
            unequal: 'UNEQUAL'
        };

        // Empty list special cases
        if (this.values.length === 0 && listTwo.values.length === 0) { return COMPARE_RESULT_TYPES.equal; }
        if (this.values.length === 0) { return COMPARE_RESULT_TYPES.sublist; }
        if (listTwo.values.length === 0) { return COMPARE_RESULT_TYPES.superlist; }

        // Lists are same length
        if (this.values.length === listTwo.values.length) {
            const equalResult = this._arrayAinArrayB(this.values, listTwo.values);

            return equalResult ? COMPARE_RESULT_TYPES.equal : COMPARE_RESULT_TYPES.unequal;
        }

        if (this.values.length < listTwo.values.length) {
            // Shift values window along listTwo.values
            return this._arrayShiftCompare(this.values, listTwo.values, COMPARE_RESULT_TYPES.sublist, COMPARE_RESULT_TYPES.unequal);
        } else {
            // Shift listTwo.values window along values
            return this._arrayShiftCompare(listTwo.values, this.values, COMPARE_RESULT_TYPES.superlist, COMPARE_RESULT_TYPES.unequal);
        }
    }
    
}

module.exports = List;
