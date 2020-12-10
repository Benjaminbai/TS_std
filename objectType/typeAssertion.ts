// 形如 <Foo> 的语法在 tsx 中表示的是一个 ReactNode，在 ts 中除了表示类型断言之外，也可能是表示一个泛型
// 故建议大家在使用类型断言时，统一使用 值 as 类型 这样的语法


// 将一个联合类型断言为其中一个类型
interface Cat {
    name: string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true
    }
    return false
}


// 当类之间有继承关系时，类型断言也是很常见的
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200
}

function isApiError(error: Error) {
    if(typeof (error as ApiError).code === 'number') {
        return true
    }
    return false
}