String.prototype.toJadenCase = function() {
    return this.split(" ")
        .map((x) => x[0].toUpperCase() + x.substr(1))
        .join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");