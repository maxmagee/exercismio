const minAsciiCode = 97;    // a
const maxAsciiCode = 122;   // z
const commaPattern = /,/g;
const punctuationPattern = /[\u00A1\u00BF\u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+\-.\/:;<=>?@\[\]^_`{|}~]/g;
const spacePattern = /\s/g;

// Given a returns z. Given b returns y. Requires letter-case characters.
const reverseAlphabet = (inputChar) => {
    if (inputChar.charCodeAt(0) < 97 || inputChar.charCodeAt(0) > 122) { return inputChar; }

    return String.fromCharCode(
        (maxAsciiCode - (inputChar.charCodeAt(0) - minAsciiCode))
    );
};

const atbash = {
    encode: (input) => {
        return input
            .toLowerCase()
            .replace(commaPattern, '')
            .replace(punctuationPattern, '')
            .replace(spacePattern, '')
            .split('')
            .map(reverseAlphabet)
            .join('')
            .replace(/(.{5})/g,"$1 ")   // breaks the string out into space-separated groups of 5
            .trim();
    }
};

module.exports = atbash;
