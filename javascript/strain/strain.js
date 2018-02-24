const strain = {
    discard: (collection, predicate) => {
        return collection.filter((item) => !predicate(item));
    },
    keep: (collection, predicate) => {
        return collection.filter(predicate);
    }
}

module.exports = strain;
