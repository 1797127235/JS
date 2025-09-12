//创建数组
let arr1 =[1,2,3]
// let arr2 = new Array(1,2,3)
let arr2 = new Array(3)  //这是创建一个长度为3的数组

let arr3 = Array.of(1,2,3)



//增加元素
let arr = [1,2]
arr.push(3) //在数组末尾添加元素
arr.unshift(0) //在数组开头添加元素
arr.splice(1,0,4) //在数组第1个位置插入4

//删除元素
arr.pop() //删除数组末尾的元素
arr.shift() //删除数组开头的元素
arr.splice(1,1) //删除数组第1个位置的元素


//修改替换
arr[1] = 5
arr.splice(1,1,5)


//查找元素
let nums = [1,2,3,4,5]
nums.indexOf(3) //查找元素3的索引
nums.find(element => element > 3) //查找第一个大于3的元素
nums.findIndex(element => element > 3) //查找第一个大于3的元素的索引

//遍历

for(let i = 0; i < nums.length; i++) console.log(nums[i])

nums.forEach(element => console.log(element))

for(let num of nums) console.log(num) //遍历数组


//常用数组方法

//生成新数组 map
let newnums = nums.map(element => element * 2)

//过滤 filter
let newnums2 = nums.filter(element => element % 2 === 0)

//合并 concat
let newnums3 = nums.concat(newnums,newnums2)


//累积运算

let sum = nums.reduce((acc,element) => acc + element,0)

//数组排序
nums.sort((a,b) => a - b)

//数组反转
nums.reverse()

//数组去重
let newnums4 = [...new S\et(nums)]

//数组切片
let newnums5 = nums.slice(0,3)






