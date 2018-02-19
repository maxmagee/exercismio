let BigInt = require('./big-integer');

class Grains {
    square(squareNum) {
        return BigInt(2).pow(squareNum - 1).toString();
    }
    total() {
        let bigIntTotal = BigInt();

        for (let i = 1; i <= 64; i++) {
           bigIntTotal = bigIntTotal.add(this.square(i));
        }
        
        return bigIntTotal.toString();
    }
}

module.exports = Grains;
