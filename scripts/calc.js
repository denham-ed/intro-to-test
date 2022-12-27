

const addition = (num1, num2) => {
    if (num1 && num2){
        return num1 + num2
    } else {
        throw new TypeError("please enter two numbers")
    }
}


console.log(addition(42,null))
module.exports = addition;