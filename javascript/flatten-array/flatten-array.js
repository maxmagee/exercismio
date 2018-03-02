const lodashFlattenDeep = require('lodash.flattendeep');

class Flattener {
    flatten(input) {
        return lodashFlattenDeep(input)
            .filter((item) => {
                return item !== null && item !== undefined
            });
    }
}

module.exports = Flattener;
