// 动态规划

// 保证 dp[l][r] == dp[l+1][r-1] && s[l]===s[j]
// (r-1)-(l+1)>=2 保证至少2个字符 , 1个字符时一定是回文


function findlongestPalindrome(str){
    const n = str.length
    let dp = Array(n).fill().map(() => Array(n));
    let long = 0
    let longStr = ''
    for(let r = 1;r<n;r++){

        for(let l = 0; l<r;l++){
            if(str[l]===str[r] && (dp[l+1][r-1] || r-l<=2)  ){
                dp[l][r] = true
                if(r-l+1>long){
                    long = r-l+1
                    longStr =  str.slice(l,r+1)
                    console.log(long,longStr,l,r,str.slice(l,l+1),str[r])
                }
            }
        }
    }
    return longStr
}

const str = 'abcbabcdcba'
console.log(findlongestPalindrome(str))