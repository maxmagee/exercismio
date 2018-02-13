// Node apparently doesn't yet support String.prototype.padStart, so I'm adding a polyfill
// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}

class SecretHandshake {
    constructor(inputDecimal) {
        if (isNaN(inputDecimal)) { throw new Error('Handshake must be a number'); }
        this.binaryString = (inputDecimal >>> 0).toString(2);
        this.binaryString = this.binaryString.padStart(5, '0');
    }
    commands() {
        let reverse = false;
        let commandArray = [null, 'jump', 'close your eyes', 'double blink', 'wink'];
        let returnedCommands = [];
        for (let i = 0; i < this.binaryString.length; i++) {
            if (i === 0 && this.binaryString.charAt(0) === '1') { 
                reverse = true;
                continue;
            }
            if (this.binaryString.charAt(i) === '1') {
                // We're reading in reverse order of how we want to normally display, so insert them at the start instead of push
                returnedCommands.unshift(commandArray[i]);
            }
        }
        return reverse ? returnedCommands.reverse() : returnedCommands;
    }
};

module.exports = SecretHandshake;
