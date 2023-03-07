function outerFunction() {
    console.log(x);
    function innerFunction() {
        var x = 10; 
    }
    return innerFunction;
}
const innerFunc = outerFunction();
innerFunc();