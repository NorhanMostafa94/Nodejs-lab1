module.exports = (arr) => arr.map(e => {
    if (isNaN(e)) {
        throw 'is not a number'
    }
    else {
        return Number(e)
    }
})