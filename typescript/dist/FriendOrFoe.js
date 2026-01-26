"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendOrFoe = friendOrFoe;
function friendOrFoe(friends) {
    return friends.filter((name) => name.length === 4);
}
console.log(friendOrFoe(["Ryan", "Kieran", "Mark"]));
console.log(friendOrFoe(["Ryan", "Jimmy", "1234", "4", "Cool Man"]));
//# sourceMappingURL=FriendOrFoe.js.map