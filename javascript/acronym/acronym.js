const parse = (input) => {
    // Short-circuit the logic if there's already a pre-determined acronym
    if (input.indexOf(':') > -1) { 
        return input.slice(0, input.indexOf(':')).toUpperCase(); 
    }

    return input
        .replace(/-/g, ' ') // Replace hyphens with whitespace
        .split(' ')
        .map((word) => {    // Capitalize the first letter of each word
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .map((word) => {    // Filter each word down to only capital letters
            return word.split('').filter((char) => {
                return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90);
            }).join('');
        })
        .join('');          // Join the result into a string to return
};

module.exports = { parse };
