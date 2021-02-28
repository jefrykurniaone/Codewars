var number = function(busStops) {
    let getIn = 0;
    let getOff = 0;
    for (let i = 0; i < busStops.length; i++) {
        getIn += busStops[i][0];
        getOff += busStops[i][1];
    }

    return getIn - getOff;
};

// test result
console.log(
    number([
        [10, 0],
        [3, 5],
        [5, 8],
    ]),
    5
);
console.log(
    number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
    ]),
    17
);
console.log(
    number([
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8],
    ]),
    21
);