class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
       this.min = min;
       this.max = max;
    }

    guess() {
        console.log(this.median());
        return this.median();
    }

    lower() {
        this.max = this.median();
    }

    greater() {
        this.min = this.median();
    }

    median() {
        return Math.ceil(this.min + (this.max - this.min)/2);
    }
}

module.exports = GuessingGame;
