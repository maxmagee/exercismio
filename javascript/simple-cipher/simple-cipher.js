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
        const minAsciiCode = 97;    // a
        const maxAsciiCode = 122;   // z
        let encodedText = "";

        for (let i = 0; i < input.length; i++) {
            const keyIndex = i % this.key.length;
            const keyIndexCode = this.key.charCodeAt(keyIndex);
            const offset = keyIndexCode - minAsciiCode;

            // Shift the letter by the offset and wrap around if we exceed the a-z bounds (122 -> 122, 123 -> 97)
            let newCharCode = (input.charCodeAt(i) + offset) % (maxAsciiCode + 1);
            // If we had to wrap around, shift up to the correct window
            if (newCharCode < 97) { newCharCode += minAsciiCode; }    

            encodedText += String.fromCharCode(newCharCode);
        }

        return encodedText;
    }

    decode(input) {
        const minAsciiCode = 97;    // a
        const maxAsciiCode = 122;   // z
        let decodedText = "";

        for (let i = 0; i < input.length; i++) {
            const keyIndex = i % this.key.length;
            const keyIndexCode = this.key.charCodeAt(keyIndex);
            const offset = keyIndexCode - minAsciiCode;

            // Shift the letter by the negative offset and wrap around if we exceed the a-z bounds (97 -> 97, 96 -> 122)
            let newCharCode = input.charCodeAt(i) - offset;
            if (newCharCode < minAsciiCode) { 
                newCharCode = maxAsciiCode - (minAsciiCode - newCharCode) + 1; 
            }

            decodedText += String.fromCharCode(newCharCode);
        }

        return decodedText;
    }
};

module.exports = Cipher;
