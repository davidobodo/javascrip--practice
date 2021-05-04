const david = ['a', 'b', 'c', 'd', 'e']
const obodo = ['a']

function check(first, second) {
    var commonValuesLength = 0;
    var commonValues = [];

    for (i = 0; i < first.length; i++) {
        for (j = 0; j < second.length; j++) {
            if (first[i] === second[j]) {
                commonValuesLength += 1;
                commonValues.push(first[i])
            }
        }
    }

    console.log(commonValuesLength);
    console.log(commonValues);

}

check(david, obodo)