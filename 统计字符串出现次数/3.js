// 找出字符串出现次数最多的元素和统计其出现次数
let str = 'abcismaiasdabaa'
let num
let w
const set = new Set(str)
// 创建对象数组
const strArr = Array.from(str)
const arr = Array.from(
	Array.from(set).map((w) => {
		return { name: w, num: 0 }
	})
)
// [
//   { name: 'a', num: 0 },
//   { name: 'b', num: 0 },
//   { name: 'c', num: 0 },
//   { name: 'i', num: 0 },
//   { name: 's', num: 0 },
//   { name: 'm', num: 0 },
//   { name: 'd', num: 0 }
// ]
// 统计
for (let i = 0; i < strArr.length; i++) {
	const index = arr.findIndex((el) => {
		return el.name === strArr[i]
	})
	arr[index].num++
}
// 通过排序找到最大值
arr.sort(function (a, b) {
	return b.num - a.num
})
console.log(arr[0])
