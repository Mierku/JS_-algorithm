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
// console.log(Select_Sort(arr))
// console.log(Insert_Sort(arr))
/**
 * 
 * 希尔排序(特殊的插入排序)
 * 时间复杂度O(n^5/4)
 * 
 */
function shell_sort(arr){
  const n = arr.length
  for(let inc = n/2 ; parseInt(inc)>0;inc/=2){
    // 每一趟插入排序
    for(let i = inc;i<n;i++){
      let cur = arr[i]
      let j;
      for(j = i ;j>=inc&&cur<arr[j-inc];j-=inc){
        arr[j] = arr[j-inc]
      }
      arr[j] = cur
    }
    console.log(arr,inc)
  }
}
// console.log(shell_sort(arr))

/**
 * 归并排序 
 * @param {*} arr 
 */
function Merge_sort(arr){
  const len = arr.length
  const res = msort(arr)
  return res
}
function msort(arr){
  let m3 = arr
  const len = m3.length
  if(len>1){
    const mid = parseInt((len-1)/2)
    const m1 = msort(arr.slice(0,mid+1))
    const m2 = msort(arr.slice(mid+1,len))
    m3 = merge(m1,m2)
  }
  return m3
 
}
function merge(m1,m2){
  let l = 0
  let r = 0

  const arr = []
  for(;l<m1.length || r<m2.length;){
    if(m1[l]<=m2[r] && l<m1.length || r>=m2.length){ // 左区间有剩余的时候和右区间有剩余时:对比  ; 右区间没剩余的时候直接 把剩余的值全部push进数组
      arr.push(m1[l])
      l++
    }else if(r<m2.length){ // 右区间有剩余的时候 直接push
      arr.push(m2[r])
      r++
    }else{
      break
    }
  }

  return arr
}

console.log(Merge_sort(arr))
console.log(merge([2],[1]))