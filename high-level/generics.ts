interface Lengthwise {
    length: number;
}


function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity(7) // error



// 泛型接口
interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>
}

let createArray: CreateArrayFunc
createArray = function<T>(length: number, value: T): Array[T] {
    let result: T[] = []
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x')