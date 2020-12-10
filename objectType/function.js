function sum(x, y) {
    return x + y;
}
// sum(1, 2, 3)
// 函数表达式
var sum1 = function (x, y) {
    return x + y;
};
// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样
var sum2 = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了
// 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数
// 此时就不受「可选参数必须接在必需参数后面」的限制了
function buildName(firstName, lastName, thirdName) {
    if (lastName === void 0) { lastName = 'cat'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName('Tom', null, 'tomcat');
console.log(1111, tomcat);
