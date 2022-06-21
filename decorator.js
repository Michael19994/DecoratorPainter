const Decorator = function (stock = []) {
    this.stock = stock
}

module.exports = Decorator;

Decorator.prototype.addPaint = function(can) {
    this.stock.push(can);
}

Decorator.prototype.calculateTotalLitres = function(stock) {
    let totalLitres = 0;
    for (paint of this.stock) {
        totalLitres = totalLitres + paint.numbersOfLitres
    }
    return totalLitres
}