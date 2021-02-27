function XO(str) {
    return (
        str
        .toLowerCase()
        .split("")
        .filter((x) => x == "x").length ==
        str
        .toLowerCase()
        .split("")
        .filter((o) => o == "o").length
    );
}

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);