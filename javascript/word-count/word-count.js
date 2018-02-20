class Words {
    constructor() {
        this.wordCount = {};
    }
    addWordToWordCount(word) {
        if (this.wordCount.hasOwnProperty(word)) {
            this.wordCount[word.toString()]++;
        } else {
            this.wordCount[word.toString()] = 1;
        }
    }
    count(phrase) {
        const filteredPhrase = this.filterPhrase(phrase);

        filteredPhrase
            .split(' ')
            .forEach((word) => {
                // Handle the case of a word that has single quotes around it
                if (word.startsWith(`'`) && word.endsWith(`'`)) {
                    const newWord = word.substring(1, word.length - 1);
                    this.addWordToWordCount(newWord);
                } else {
                    this.addWordToWordCount(word);
                }
                
            });

        return this.wordCount;
    }
    filterPhrase(phrase) {
        const commaPattern = /,/g;
        const tabPattern = /\t/g;
        const newLinePattern = /\n/g;
        const punctuationPattern = /[\u00A1\u00BF\u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+\-.\/:;<=>?@\[\]^_`{|}~]/g;
        const multipleSpacePattern = /\s+/g;

        return phrase
            .replace(commaPattern, ' ')
            .replace(tabPattern, ' ')
            .replace(newLinePattern, ' ')
            .replace(punctuationPattern, '')
            .replace(multipleSpacePattern, ' ')
            .trim()
            .toLowerCase();
    }
}

module.exports = Words;
