class Crypto {
    constructor(input) {
        this.input = input;
    }
    ciphertext() {
        let cipherText = '';
        const segments = this.plaintextSegments();
        
        for (let i = 0; i < this.size(); i++) {
            segments.forEach((segment) => {
                cipherText += segment.charAt(i) || '';
            });
        }

        return cipherText;

    }
    normalizePlaintext() {
        return this.input
            .toLowerCase()
            .replace(/[^a-z0-9]/g,'');   // Remove non alphanumeric lowercase characters        
    }
    plaintextSegments() {
        const normalizedText = this.normalizePlaintext();
        const numberOfColumns = this.size();
        const segments = [];
        let segment = '';        

        for (let i = 0; i < normalizedText.length; i++) {
            if (segment.length < numberOfColumns) {
                segment += normalizedText.charAt(i);
            } else {
                segments.push(segment);
                segment = normalizedText.charAt(i);
            }
        }

        if (segment.length !== 0) { segments.push(segment); }

        return segments;
    }
    // The number of columns in the rectangle
    size() {
        return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
    }
}

module.exports = Crypto;
