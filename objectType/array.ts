// 最简单的方法是使用「类型 + 方括号」来表示数组
let arr: number[] = [1, 2, 3]

// 也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组
let arr2: Array<number> = [4, 5, 6]

// 接口也可以用来描述数组
interface IArray {
    [index: number]: number
}
let arr3: IArray = [7, 8, 9]

// 类数组（Array-like Object）不是数组类型，比如 arguments
function sum() {
    // let args: number[] = arguments;
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }]