let u:undefined = undefined
let n:null = null

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量 严格模式下，会报错
let num:number = undefined
let num1:number = null

let u1:undefined
let num2:number = u1