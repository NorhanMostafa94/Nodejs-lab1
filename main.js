const operations = require('./Operations')

const params = process.argv.splice(2)
// console.log(params);

const operatorIndex = params.findIndex(e => e.startsWith('--'));
// console.log(operatorIndex);

const [operator] = params.splice(operatorIndex, 1).map(e => e.substring(2));
// console.log(operator);

const validate = require('./validator')
// const operands = params.map(e => {
//     if (isNaN(e)) {
//         throw 'is not a number'
//     }
//     else {
//         return Number(e)
//     }
// })
const operands = validate(params)
let func = operations[operator];
console.log(func(...operands))
