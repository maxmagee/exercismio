class PhoneNumber {
    constructor(numberString) {
        this.numberString = numberString;
    }
    number() {
        const onlyNumbers = (character) => {
            return !isNaN(character) && character != ' ';
        };

        const validExchangeCode = (numberString) => {
            return (Number(numberString.charAt(0)) >= 2) && (Number(numberString.charAt(3)) >= 2)
        };

        let newNumberString = this.numberString.split('').filter(onlyNumbers).join('');

        if (newNumberString.length < 10) { return null; }
        if (newNumberString.length === 10 && validExchangeCode(newNumberString)) { return newNumberString; }
        if (newNumberString.length === 11 && validExchangeCode(newNumberString.slice(1))) {
            if (newNumberString.charAt(0) === '1') { return newNumberString.slice(1); }
            else { return null; }
        }
        if (newNumberString.length > 11) { return null; }
        
        return null;
    }
};

module.exports = PhoneNumber;
