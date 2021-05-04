const a = [17, 28, 30];
const b = [99, 16, 8]

function compareTriplets(a, b) {

    let alicePoints = 0;
    let bobPoints = 0;
    let comparedPoints = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alicePoints += 1;
        } else if (a[i] < b[i]) {
            bobPoints += 1;
        }
    }

    comparedPoints = [alicePoints, bobPoints]

    // comparedPoints.push(alicePoints)
    // comparedPoints.push(bobPoints)

    comparedPoints
}

compareTriplets(a, b)