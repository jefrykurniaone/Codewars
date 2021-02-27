function getMiddle(s) {
    if (s.length % 2 == 0) {
        return s.substr(s.length / 2 - 1, 2);
    } else {
        return s.substr(s.length / 2, 1);
    }
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");