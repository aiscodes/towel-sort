// You should implement your task here.

module.exports = function towelSort(matrix) {
  let sum = []
  if (matrix != undefined || matrix) {
    if (matrix.length != 0) {
      matrix.map((el, index) => {
        index == 0 || index % 2 == 0
          ? sum.push(...el)
          : sum.push(...el.reverse())
      })
      return sum
    } else {
      return []
    }
  } else {
    return []
  }
}
