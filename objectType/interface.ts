
// 定义的变量比接口少了一些属性是不允许的
// 多一些属性也是不允许的
// 赋值的时候，变量的形状必须和接口的形状保持一致
// 有时我们希望不要完全匹配一个形状，那么可以用可选属性
interface person {
    name: string;
    age?: number
}

let tom: person = {
    name: 'tom',
    age: 20
}

// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式
// 使用 [propName: string] 定义了任意属性取 string 类型的值
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface IPerson {
    name?: string;
    age?: number;
    [propName: string]: any
}

let tom1: IPerson = {
    gender: 'man'
}

// 上述任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了

// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
// 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性
// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
interface IPerson2 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom2: IPerson2 = {
    id: 123,
    name: 'Tom',
    age: 25,
    gender: 'male'
};
// tom.id = 89757  error
