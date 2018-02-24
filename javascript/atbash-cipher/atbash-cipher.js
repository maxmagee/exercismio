const minAsciiCode = 97;    // a
const maxAsciiCode = 122;   // z

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
            .replace(/[^a-z0-9]/g,'')   // Remove non alphanumeric lowercase characters
            .split('')
            .map(reverseAlphabet)
            .join('')
            .replace(/(.{5})/g,"$1 ")   // breaks the string out into space-separated groups of 5
            .trim();
    }
};

module.exports = atbash;
