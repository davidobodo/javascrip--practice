var num = [1, 2, 3, 4, 5]

//method 1
var store = 0;
for (let i = 0; i < num.length; i++) {
    store = store + num[i]
}

store

//method 2
const newArr = num.reduce((a, b) => {
    return a + b
}, 0)

newArr


