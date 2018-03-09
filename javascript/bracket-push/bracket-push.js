const bracket = (input) => {
    const stack = [];

    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char);
        } else {
            if (char === '}' && stack.pop() !== '{') { return false; }
            if (char === ']' && stack.pop() !== '[') { return false; }
            if (char === ')' && stack.pop() !== '(') { return false; }
        }
    }

    return true && stack.length === 0;
};

module.exports = bracket;
