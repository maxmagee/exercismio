// Modification of object comparison method I found here:
// http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
// Note: In normal cases, you should use underscore or lodash object comparison methods
const isEquivalent = (a, b) => {
    // Create arrays of property names
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

class Anagram {
    constructor(word) {
        this.word = word.toLowerCase();
        this.wordAsObject = this.getCharacterCountObject(this.word);
    }
    // Returns an object with keys as letters with values of how many times that letter appears
    getCharacterCountObject(input) {
        const characterObj = {};
        
        const incrementCharacterCount = (character) => {
            if (characterObj.hasOwnProperty(character)) { characterObj[character] += 1; }
            else { characterObj[character] = 1; }
        };

        for (let i = 0; i < input.length; i++) {
            incrementCharacterCount(input.charAt(i));
        }

        return characterObj;
    }
    matches(list) {
        let newList = list;

        // If we're provided with one or more string parameters, break those into an array of strings
        if (typeof arguments[0] === 'string') { newList = [...arguments]; } 

        return newList.filter((item) => {
            return this.word !== item.toLowerCase() &&
                isEquivalent(this.wordAsObject, this.getCharacterCountObject(item.toLowerCase()));
        });
    }
};

module.exports = Anagram;
