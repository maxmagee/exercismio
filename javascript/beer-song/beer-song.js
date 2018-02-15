class BeerSong {
    sing(startingVerse, endingVerse = 0) {
        let song = '';
        
        for (let verseNum = startingVerse; verseNum >= endingVerse; verseNum--) {
            if (song.length > 0) { song += '\n'; }      // Adding a new-line between verses
            song += this.verse(verseNum);
        }

        return song;
    }
    verse(verseNumber) {
        switch (verseNumber) {
            case 0:
                return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
                break;
            case 1:
                return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
                break;
            case 2:
                return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
                break;
            default:
                return `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.\nTake one down and pass it around, ${verseNumber -1} bottles of beer on the wall.\n`;
                break;
        }
    }
}

module.exports = BeerSong;
