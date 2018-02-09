// Generates a random string of lower-case letters of a specified length
const generateLowercaseString = (length) => {
    let randomKey = "";

    for (let i = 0; i < length; i++) {
        // Generate the ASCII codes for a (97) to z (122) and build our key
        const code = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        randomKey += String.fromCharCode(code);
    }

    return randomKey;
};

const TRANSLATE_TYPES = {
    "ENCODE" : "ENCODE",
    "DECODE" : "DECODE"
};

// Returns an encoded or decoded string
const encodeOrDecode = (translateType, input, key) => {
    const minAsciiCode = 97;    // a
    const maxAsciiCode = 122;   // z

    const encode = (index, offset) => {
        // Shift the letter by the offset and wrap around if we exceed the a-z bounds (122 -> 122, 123 -> 97)
        let newCharCode = (input.charCodeAt(index) + offset) % (maxAsciiCode + 1);
        // If we had to wrap around, shift up to the correct window
        if (newCharCode < 97) { newCharCode += minAsciiCode; }    

        return String.fromCharCode(newCharCode);
    };

    const decode = (index, offset) => {
        // Shift the letter by the negative offset and wrap around if we exceed the a-z bounds (97 -> 97, 96 -> 122)
        let newCharCode = input.charCodeAt(index) - offset;
        if (newCharCode < minAsciiCode) { 
            newCharCode = maxAsciiCode - (minAsciiCode - newCharCode) + 1; 
        }

        return String.fromCharCode(newCharCode);
    };

    let translatedText = "";
    let translateMethod = null;

    switch (translateType) {
        case TRANSLATE_TYPES.ENCODE:
            translateMethod = encode;
            break;
        case TRANSLATE_TYPES.DECODE:
            translateMethod = decode;
            break;
        default:
            throw new Error(`Invalid TRANSLATE_TYPE: ${translateType}`);
            break;
    }

    for (let i = 0; i < input.length; i++) {
        const keyIndex = i % key.length;
        const keyIndexCode = key.charCodeAt(keyIndex);
        const offset = keyIndexCode - minAsciiCode;

        translatedText += translateMethod(i, offset);
    }

    return translatedText;
};

class Cipher {
    constructor(key) {
        this.key = this.setKey(key);
    }

    setKey(key) {
        // If an empty key is provided, throw an error
        if (key === '') { throw new Error('Bad key'); }
        // If no key is provided, generate one
        if (!key) { return generateLowercaseString(10); }
        // If the key contains non-lowercase letters, throw an error
        if (key.split("").some((char) => {
            return char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122;
        })) {
            throw new Error('Bad key');
        }

        return key;
    }

    encode(input) {
        return encodeOrDecode(TRANSLATE_TYPES.ENCODE, input, this.key);
    }

    decode(input) {
        return encodeOrDecode(TRANSLATE_TYPES.DECODE, input, this.key);
    }
};

module.exports = Cipher;