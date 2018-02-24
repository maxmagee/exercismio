const strain = {
    discard: (collection, predicate) => {
        const discarded = [];

        collection.forEach((item) => {
            if (!predicate(item)) { discarded.push(item); }
        });

        return discarded;
    },
    keep: (collection, predicate) => {
        const kept = [];

        collection.forEach((item) => {
            if (predicate(item)) { kept.push(item); }
        });

        return kept;
    }
};

module.exports = strain;
