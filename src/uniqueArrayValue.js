export function uniqueArrayValue(arr) {
    let uniqueArray = arr.reduce(function (acc, currentVal) {
        if (acc.indexOf(currentVal) === -1) {
            acc.push(currentVal)
        }
        return acc;
    }, [])

    return uniqueArray;
}