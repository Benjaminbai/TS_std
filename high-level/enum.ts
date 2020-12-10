
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true


// 我们也可以给枚举项手动赋值
enum Days1 {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat}
// 未手动赋值的枚举项会接着上一个枚举项递增
console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true


// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
enum Days2 {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat}
console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1.5); // true
console.log(Days["Tue"] === 2.5); // true
console.log(Days["Sat"] === 6.5); // true

// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）
enum Color {Red, Green, Blue = "blue".length};
// 上面的例子不会报错，但是如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
enum Color1 {Red = "red".length, Green, Blue};