// 转换数组排序
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
const newA = Array.from(map)
const res = newA.sort((a, b) => b[1] - a[1])[0]

console.log(...res)
