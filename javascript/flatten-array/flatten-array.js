class Flattener {
    flatten(input) {
        let result = [];

        input.forEach((element) => {
            if (element !== null) {
                Array.isArray(element) ? 
                    result.push(...this.flatten(element)) :
                    result.push(element);
            }
        });

        return result;
    }
}

module.exports = Flattener;
