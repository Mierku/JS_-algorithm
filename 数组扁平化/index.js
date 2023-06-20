/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
const arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]]
// 递归, 但慢
var flat = function (arr, n) {
    let res = []
    if(n<=0) return arr
    const len = arr.length
    for(let i = 0;i<len;i++){
        if(Array.isArray(arr[i])){
            res.push(...flat(arr[i],n-1))
        } else {
            res.push(arr[i])
        }
    }

    return res
};
console.log(flat(arr,2))