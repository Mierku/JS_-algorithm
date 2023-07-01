var generate = function(numRows) {
    const dp = Array.from(new Array(numRows),()=>new Array(numRows))
    for(let i = 0;i<numRows;i++){
        for(let j =0; j<=i;j++){
            console.log(i,j)
            if(j===0 || j===i){
                dp[i][j] = 1
            }else{
                // console.log(dp)
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
            }
        }
    
    }
    return dp
};
// console.log(generate(5))



// var threeSum = function(nums) {
//     nums.sort()
//     const numsMap = new Map(Array.from(nums,(v,i)=>new Array(v,i)))
//     const res = new Map()
//     for(let i = 0;i<nums.length;i++){
//         // sum = sum1 + nums[i] => sum1 = sum -nums[i] => sum1 = 0 - nums[i]
//         const sum1 = 0 - nums[i]
//         for(let j = i+1 ;j<nums.length;j++){
//           // sum1 = nums[j] + nums[k] => nums[k] = nums[j] - sum1  
//             valuek = sum1 - nums[j]
//             if(numsMap.has(valuek) && numsMap.get(valuek)>j && !res.has(([nums[i],nums[j],nums[numsMap.get(valuek)]]).toString())){
//                 res.set([nums[i],nums[j],nums[numsMap.get(valuek)]].toString(),[nums[i],nums[j],nums[numsMap.get(valuek)]])
//             }
//         }
//     }

//     // 比较去重
//     return Array.from(res.values())
// };


var threeSum = function(nums) {
    nums.sort()
    const numsMap = new Map(Array.from(nums,(v,i)=>new Array(v,i)))
    const much = new Map()
   
    const res = []
    for(let i = 0;i<nums.length;i++){
        // sum = sum1 + nums[i] => sum1 = sum -nums[i] => sum1 = 0 - nums[i]
        if(much.has(nums[i])){
            console.log(1)
            continue
        }
 
        const much2 = new Map()
        const sum1 = 0 - nums[i]
        for(let j = i+1 ;j<nums.length;j++){
          // sum1 = nums[j] + nums[k] => nums[k] = nums[j] - sum1  
            valuek = sum1 - nums[j]
            if(numsMap.has(valuek) && numsMap.get(valuek)>j && !much2.has(nums[j])){
                much.set(nums[i],0)
                much2.set(nums[j],0)
                res.push([nums[i],nums[j],nums[numsMap.get(valuek)]])
            }
        }
    }

    // 比较去重
    return res
};
// const arr = [1,3,65,8,9]
// const map = new Map(Array.from(arr,(v,i)=>new Array(i,v)))
console.log(threeSum([0,0,0,0]))