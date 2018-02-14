const encode = (input) => {
    if (input.length === 0) { return ''; }

    let currentCharacter = null;
    let currentCount = 0;
    let encodedString = '';

    const appendToEncodedString = () => {
        if (currentCount > 1) { encodedString += currentCount; }
        encodedString += currentCharacter;
    };

    for (let i = 0; i < input.length; i++) {
        // Handle the beginning of the string, we don't have a current character yet
        if (!currentCharacter) {
            currentCharacter = input.charAt(i);
            currentCount = 1;
        } else {
            // We're not at the beginning, check to see if we switched characters
            if (currentCharacter === input.charAt(i)) { currentCount++; }
            else {
                // We switched characters, encode what we had and update the current count and character
                appendToEncodedString();
                currentCharacter = input.charAt(i);
                currentCount = 1;
            }
        }
    }
    // Need to append the final character sequence
    appendToEncodedString();   

    return encodedString;
};

const decode = (input) => {
    if (input.length === 0) { return ''; }
    let currentCharacter = null;
    let countString = '';
    let decodedString = '';

    for (let i = 0; i < input.length; i++) {
        // Special check for empty string because isNaN(' ') evaluates to isNaN(0) yay JavaScript!
        if (isNaN(input.charAt(i)) || input.charAt(i) === ' ') {
            if (countString === '') {               // We read a character before any number 
                decodedString += input.charAt(i);
            } else {
                decodedString += input.charAt(i).repeat(Number(countString));
                countString = '';
            }
        } else {
            countString += input.charAt(i);
        }
    }

    return decodedString;
};

module.exports = {
    encode,
    decode
};
