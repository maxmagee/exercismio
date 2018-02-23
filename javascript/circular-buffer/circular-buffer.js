const bufferEmptyException = () => {
    return new Error('The buffer is currently empty.');
};

const bufferFullException = () => {
    return new Error('The buffer is currently full.');
};

/*
    While this implementation technically works, I wouldn't recommend this for large buffers
    The Array.prototype.shift() method readdresses the entire array, which can get inefficient
    I would recommend a second approach of possibly a constant-sized array and the use of 
    'first' and 'last' index pointers most likely. 
*/

const circularBuffer = (length) => {
    const buffer = {
        items: [],
        maxLength: length
    };
    
    const clear = () => {
        buffer.items = [];
    }

    const forceWrite = (item) => {
        if (buffer.items.length < buffer.maxLength) { write(item); }
        else {
            buffer.items.shift();
            buffer.items.push(item);
        }
    };

    const read = () => {
        if (buffer.items.length === 0) { throw bufferEmptyException(); }
        if (buffer.items.length > 0) { return buffer.items.shift(); }
    };

    const write = (item) => {
        if (buffer.items.length === buffer.maxLength) { throw bufferFullException(); }
        if (item === undefined || item === null) { return; }

        buffer.items.push(item);
    }

    return { clear, forceWrite, read, write };
};

module.exports = {
    bufferEmptyException,
    bufferFullException,
    circularBuffer
};
