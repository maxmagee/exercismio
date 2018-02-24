const accumulate = (collection, accumulator) => {
    let newCollection = [];

    collection.forEach((item) => {
        newCollection.push(accumulator(item));
    });

    return newCollection;
};

module.exports = accumulate;
