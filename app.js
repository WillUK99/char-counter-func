/**
*  Q) Given a string return the count of each letter and number - exclude spaces
*/

function charCounter(str) {
    const cache = {}
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase()
            cache[char] = ++cache[char] || 1
        }
    }
    return cache
}

function isAlphaNumeric(char) {
    const charCode = char.charCodeAt(0)
    if (!(charCode > 47 && charCode < 58) &&
        !(charCode > 64 && charCode < 91) &&
        !(charCode > 96 && charCode < 123)) {
        return false
    }
    return true
}

console.log(charCounter("hello my name is Joe"))

