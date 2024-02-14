function robotInstructions(array) {
    return array.reduce((obj, curr) => {
        obj[curr] = ++obj[curr] || 1
        return obj
    }, {})
}

