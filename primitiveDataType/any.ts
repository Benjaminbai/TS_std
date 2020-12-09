// 如果是一个普通类型，在赋值过程中改变类型是不被允许的
let str: number = 1
// str = "7"

// 但如果是 any 类型，则允许被赋值为任意类型
let str1: any = 1
str1 = 'ben'


// 在任意值上访问任何属性都是允许的
let obj: any = 0
console.log(obj.name)

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let obj2
console.log(obj2.value)