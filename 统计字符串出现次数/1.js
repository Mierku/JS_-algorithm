// 找出字符串出现次数最多的元素和统计其出现次数
let str = 'abcismaiasdabaa'
let map = new Map()
const set = new Set(str)
// 初始化
set.forEach((item) => {
	map.set(item, 0)
})

// 统计
for (let i = 0; i < str.length; i++) {
	const key = str.charAt(i)
	map.set(key, map.get(key) + 1)
}
// 选择
let markKey = 0
let max = 0
for (let [key, val] of map) {
	if (max < val) {
		markKey = key
		max = val
	}
}
console.log(markKey, max)
