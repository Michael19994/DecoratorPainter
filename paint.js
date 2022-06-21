const Paint = function (numbersOfLitres) {
    this.numbersOfLitres = numbersOfLitres;
}

Paint.prototype.checkIfEmpty = function() {
    if (this.numbersOfLitres === 0) {
        return true;
    } else {
        return false;
    }
}

Paint.prototype.empty = function () {
    this.numbersOfLitres = 0 
}

module.exports = Paint;