// Check distances Between same letters

const checkDistances = function (s, distance) {
    let map = {};

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (map[ch] === undefined) {
            map[ch] = i;
        } else {
            let actual = i - map[ch] - 1;
            let expected = distance[ch.charCodeAt(0) - 97];

            if (actual !== expected) return false;
        }
    }

    return true;
}


console.log(checkDistances("aa", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))