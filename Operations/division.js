module.exports = (first, ...args) => {
    return args.reduce(function (agg, val) {
        if (val != 0 ) {
            return agg /= val;
        }

        else {
            throw 'can not divide by zero';
        }
    }, first)
}