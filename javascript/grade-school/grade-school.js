class School {
    constructor() {
        this.currentRoster = {};
    }
    add(name, gradeNumber) {
        if (this.currentRoster.hasOwnProperty(gradeNumber)) {
            this.currentRoster[gradeNumber].push(name);
            this.currentRoster[gradeNumber].sort();
        } else {
            this.currentRoster[gradeNumber] = new Array(name);
        }
    }
    grade(gradeNumber) {
        return this.currentRoster[gradeNumber] || [];
    }
    roster() {
        return this.currentRoster;
    }
};

module.exports = School;
