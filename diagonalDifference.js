// let matrix = [10,2,3,4,5,6,9,8,9]
let matrix = [11, 2, 4, 4, 5, 6, 10, 8, -12]

matrix

function chunk(array, size) {
  const chunked_arr = []
  let index = 0
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index))
    index += size
  }
  return chunked_arr
}

let matrixType = Math.sqrt(matrix.length)
let sub = chunk(matrix, matrixType)

sub

let firstDiagonalSum = 0
let secondDiagonalSum = 0

for (let i = 0; i < matrixType; i++) {
  firstDiagonalSum += matrix[matrixType * i + i]
  secondDiagonalSum += matrix[(matrixType - 1) * (i + 1)]
}

let absSum = Math.abs(secondDiagonalSum - firstDiagonalSum)
