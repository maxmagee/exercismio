class Binary{
    constructor(binaryString) {
        this.binaryString = binaryString;
    }
    toDecimal() {
        // filteredString is null if the binaryString contains something other than 0 or 1
        const filteredString = this.binaryString.match(/^[0-1]+$/);

        return filteredString === null ? 0 : parseInt(filteredString, 2); 
    }
}

module.exports = Binary;
