const arr = [4, 2, 3, 8, 6, 9, 24, 3]
/**
 * 插入排序
 * 稳定性: 稳定
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(n)
 *
 */
function Insert_Sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    cur = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (cur < arr[j]) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    // while (j >= 0 && arr[j] > cur) {
    //   arr[j + 1] = arr[j]
    //   j--
    // }
    arr[j + 1] = cur
    console.log(arr)
  }
  return arr
}
/**
 * 选择排序
 * 稳定性: 不稳定
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(n)
 *
 */
function Select_Sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1
    let max = arr[i]
    let maxpos = i
    for (; j < arr.length; j++) {
      if (max < arr[j]) {
        max = arr[j]
        maxpos = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[maxpos]
    arr[maxpos] = temp

    // ;[arr[i], max] = [max, arr[i]]
    console.log(arr)
  }
}
console.log(Select_Sort(arr))
// console.log(Insert_Sort(arr))
