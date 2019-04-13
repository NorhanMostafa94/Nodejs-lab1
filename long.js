const operations = require('./Operations');

const params = process.argv.splice(2);
// console.log(params.length);
for (var i = 0; i < params.length; i++) {
    const operatorIndex = params.findIndex(e => e.startsWith('--'));
    // console.log(operatorIndex);

    const [operator] = params.splice(operatorIndex, 1).map(e => e.substring(2));
    // console.log(operator);

    const operands = params.map(e => Number(e));
    let func = operations[operator];
    console.log(func(...operands))
}
