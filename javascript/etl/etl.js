class ETL {
    transform(oldObject) {
        let newObject = {};

        Object.keys(oldObject).forEach((key) => {
            oldObject[key].forEach((letter) => {
                newObject[letter.toLowerCase()] = Number(key);
            });
        });

        return newObject;
    }
}

module.exports = ETL;
