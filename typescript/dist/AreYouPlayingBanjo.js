"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areYouPlayingBanjo = areYouPlayingBanjo;
function areYouPlayingBanjo(name) {
    return name.charAt(0).toLowerCase() === 'r'
        ? `${name} plays banjo`
        : `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo('Robert'));
console.log(areYouPlayingBanjo('Alice'));
//# sourceMappingURL=AreYouPlayingBanjo.js.map