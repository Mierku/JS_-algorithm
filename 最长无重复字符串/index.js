// 动态规划
// 一般情况下 dp[i] = dp[i-1] + 1 
// 边界 dp[i-1] >= i - s[i]之前的位置  从1开始

function findLongStr(str){
    const len = str.length
    if(len<=1) return len
    // 每个默认位置初始化为1

    const dp = new Array(len).fill(1)

    const map = new Map()
    map.set(str[0],0)

    // 从1开始
    for(let i = 1 ;i<len;i++){
        console.log(3)
        if(map.has(str[i])){
            if(dp[i-1]>= i - map.get(str[i])){
                dp[i] = i - map.get(str[i])
            }else{
                dp[i] = dp[i-1] + 1
            }
  
        } else{
            dp[i] = dp[i-1] + 1
        }
        map.set(str[i],i)

    }
    // 获取最长字符串
    let maxpos = 0
    let max = dp[0]
  for(let j = 1;j<dp.length;j++){
    if(dp[j]>max){
        maxpos = j
        max = dp[j]
    }
  }
    console.log(dp, str.slice(maxpos-max+1,maxpos+1))
}

var lengthOfLongestSubstring = function(s) {
    const len = s.length
    if(len<=1) return len
    // 每个默认位置初始化为1
    const dp = []
    for(let k = 0 ;k<len ;k++){
        dp[k] = 1
    }
    const map = new Map()
    map.set(s[0],0)

    // 从1开始
    for(let i = 1 ;i<len;i++){
        if(map.has(s[i])){
            if(dp[i-1]>= i - map.get(s[i])){
                dp[i] = i - map.get(s[i])
            }else{
                dp[i] = dp[i-1] + 1
            }
  
        } else{
            dp[i] = dp[i-1] + 1
        }
        map.set(s[i],i)

    }
    // 获取最长字符串
    let maxpos = 0
    let max = dp[0]
  for(let j = 1;j<dp.length;j++){
    if(dp[j]>max){
        maxpos = j
        max = dp[j]
    }
  }

  return s.slice(maxpos-max+1,maxpos+1)
   };
const str = '1233452624'
console.log(lengthOfLongestSubstring(str))