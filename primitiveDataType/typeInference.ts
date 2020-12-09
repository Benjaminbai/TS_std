// 以下代码虽然没有指定类型，但是会在编译的时候报错
// let str = 'str'
// str = 7

// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
let str1
str1 = 7