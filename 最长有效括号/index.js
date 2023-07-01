// var longestValidParentheses = function(s) {
//     let stack = []
//     let arr = []
//     for (let i = 0 ; i<s.length;i++){
//         if(s[i]==='('){
//             stack.push([s[i],i])
//         }else{
//             const v = stack.pop()
//             if(v){
//                 arr.push(0)
//             } else{
//                  arr.push(1)
//             }
//         }
//     }
//     while(stack.length!==0){
//         const item = stack.pop()
//         arr.splice()
//     }
//     // 滑动窗口
//     if(arr.length===1){
//         if(arr[0]===0) return 2
//         else return 0
//     }
//     const map = new Map()
//     let max = 0
//     let i=0,j = 0
//     while(i<arr.length && j<arr.length){
//         if(arr[j+1]===1 && arr[j]===0 || arr[j]===1){
//             if(arr[i+1]===1){
//                 i++
//             }else{
//                 i++
//                 j = i
//             }

//         }else{
//             if(j+1>=arr.length){
//                 console.log(j)
//                 break
//             }
//             j++
//         }
//         console.log(j,i)
//         max=Math.max(max,j-i+1)

//     }
//     // console.log(max)
//     console.log(arr)
//     return max*2
// };


var longestValidParentheses = function(s) {
    let stack = []
    let max = 0
    const sMap = new Map()
    Array.from(s).forEach((c,i)=>{
        sMap.set(i,1)
    })
    for(let i = 0 ;i<s.length;i++){
        if(s[i]==='('){
            stack.push([s[i],i])
        } else{
            const item = stack.pop()
            if(!item) continue
            if( item[0]==='(' ){
                sMap.set(i,0)
                sMap.set(item[1],0)
                max = Math.max(i-item[1]+1,max)
            }
        }
    }
return max
    // const arr = Array.from(sMap.values())
    // console.log(arr)

    // 滑动窗口

//    let left = 0;
//   let right = 0;
//   let maxLen = 0;
//   while (right < arr.length) {
//     if (arr[right] === 0) {
//         maxLen = Math.max(maxLen, right - left + 1);
//     } else{
//         left = right
//     }
//     right++;
//     while (arr[left] === 1) {
//         left++
//     }
  

//   }
//   return maxLen;
};
console.log(longestValidParentheses(")()("))