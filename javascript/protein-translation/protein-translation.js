const getProtein = (codon) => {
    switch (codon) {
        case 'AUG':
            return 'Methionine';
        case 'UUU':
        case 'UUC':
            return 'Phenylalanine';
        case 'UUA':
        case 'UUG':
            return 'Leucine';
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
            return 'Serine';
        case 'UAU':
        case 'UAC':
            return 'Tyrosine';
        case 'UGU':
        case 'UGC':
            return 'Cysteine';
        case 'UGG':
            return 'Tryptophan';
        case 'UAA':
        case 'UAG':
        case 'UGA':
            return 'STOP';
        default:
            throw new Error('Invalid codon');
            break;
    }
}

const translate = (sequence) => {
    if (!sequence) { return []; }
    
    const codonArray = sequence.match(/.{1,3}/g);
    const proteinArray = [];

    for (let codon of codonArray) {
        const protein = getProtein(codon);

        if (protein === 'STOP') { return proteinArray; }

        proteinArray.push(protein);
    }

    return proteinArray;
};

module.exports = translate;