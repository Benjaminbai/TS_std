// 定义一对值分别为 string 和 number 的元组
let tomm: [string, number] = ['tom', 25]

// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
tomm.push('male')
tomm.push(30)
// tomm.push(true)