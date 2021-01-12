# TS_std
typescript

1. number, string, boolean, object, null, undefined, symbol都比较简单
    ```
    let num: number = 1
    let str: string = ""
    let lean: boolean = true
    let obj: object = {}
    let syb: symbol = Symbol()
    ```
    - null, undefined 可以赋值给除never以为的类型
2. Array 类型
    - 方式1: 
        ```
        let arr: Array<number> = [1,2,3]
        ```
    - 方式2: 
        ```
        let arr: number[] = [1,2,3]
        ```
3. Tuple 类型
    - 类似数组类型， 只不过数组元素的类型，个数都是确定的
        ```
        let tu: [number, string] = [1, "1"]
        ```
4. any 类型
5. void 类型
    - 通常用来声明没有返回值的，函数的，返回值类型
        ```
        function foo(): void {

        }
        ```
6. never 类型
    - 通常用来声明永远不会返回的函数
        ```
        function foo(message: string: never) {
            throw new Error(message)
        }
        ```
7. enum 枚举类型
    - 使用枚举，可以为一组数值提供友好的名字
    ```
    enum Color {red, blue, green}
    let col:Color = Color.red
    ```
    - 默认情况下，从0开始为元素编号
    - 也可以手动指定成员数值
    - 也支持指定字符串
    - 枚举提供一个便利就是，可以通过枚举值得到它的名字
        ```
        enum Color {red = 1, green, blue}
        let colorName: Color = Color[2] // green
        ```
8. 类型断言
    - 两种方式：一种尖括号法，一种as语法
    ```
    let someValue: any = "this is a string";
    let len1: number = (<string>someValule).length
    let len:2 number = (someValule as string).length
    ```
    - jsx中只能使用as语法

## typeScript 进阶篇
1. 函数
    - 主要声明参数，返回值类型
    - 函数参数可以指定可选参数，“？”
2. interface 接口
    - 可选属性
    - 只读属性
    - 除了能表述对象类型外，还可以描述函数
    - 可声明对象的索引类型
    ```
    interface StringArray {
        [index: number]: string
    }
    let arr: StringArray = ["1", "2"]
    let str: stirng = arr[0]
    ```
3. class 类
    - 和es6不同点： 
    - 只读属性
    - publiic，private， protected修饰符
    - 抽象类
    - 实现接口
    - public修饰符表示属性是公开的，可以通过实例去访问该属性。类属性默认都是public属性
    - private修饰符表示属性是私有的
    - protected修饰符表示属性是保护属性，只有实例的方法和派生类中的实例方法才能访问到。
4. 抽象类
    - 不能实例化
    - abstract关键字定义
    - 类可以实现接口，通过implements
5. 泛型
    - 泛型函数
        ```
        function someFunction<T>(arg:T):T {
            return arg
        }
        console.log(someFunction<number>(123))
        ```
    - 泛型类型
        ```
        interface UserInfo<T> {
            id: T,
            age: number
        }
        const userInfo: UserInfo<number> = {
            id: 123,
            age: 23,
        }
        // -----------------------
        type UserInfo<T> = {
            id: T,
            age: number
        }
        const userInfo: UserInfo<string> = {
            id: "123",
            age: 23,
        }
        ```
    - 泛型类
        ```
        class someClass<T> {
            constructor(private id: T) {}
            getId<T>() {
                return this.id
            }
        }
        ```
    - 又时编译器不知道泛型的类型，使用某些方法会报错
        ```
        function logLen<T>(arg:T):T {
            return arg.length // error
        }
        // ---------------------------
        // 解决办法， 加上泛型约束
        interface typeWithLen {
            length: number
        }
        function logLen<T extends typeWithLen>(arg:T):T {
            return arg.length // ok
        }
        ```

## Typescript高级篇
1. 交叉类型： 将多个类型合并为一个类型
    ```
    interface A {
        a?:number
    }
    interface B {
        b?: string
    }
    let value: A & B = {}
    value.a = 1 // ok
    value.b = 2 // ok
    ```
2. 联合类型： 变量属于联合类型中的一种类型，使用时要先断言
    ```
    interface A {
        a?:number
    }
    interface B {
        b?: string
    }
    let value: A | B = {}
    (<number>value).a = 1 // ok
    (value as string).b = "2" // ok
    ```
3. 类型别名 type
    - 类型别名可以给一个类型起个新名字
4. is
    - is 关键字通常组成类型谓词，作为函数的返回值
    - 形式为 paramName is type
    - paramName必须是来自当前函数签名里的一个参数
    ```
    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined
    }
    ```
    - 这样做的好处是，当用函数后，返回true，编译器会将变量的类型锁定为那个具体的类型
    ```
    if(isFish(pet)) {
        pet.swim // // 进入这里，编译器认为pet是Fish类型
    }else {
        pet.fly(); // 进入这里，编译器认为pet是Bird类型
    }
    ```
5. keyof为索引类型查询操作符
    - 这样做的好处是使得编译器能够检查到动态属性的类型
    ```
    interface Person {
        name: string;
        age: number;
    }
    function pick<T, K extends keyof T>(obj: T, keys: k[]): T[K][] {
        return keys.map(key => obj[k])
    }
    console.log(pick(person, ["name","age"]))
    ```
        