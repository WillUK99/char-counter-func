# char-counter-func
Q) Given a string return the count of each letter and number - exclude spaces

## Info
These two functions will loop over a given string and count the instances of characters within the passed string and add them to a cache before being returned.

Within the first function there is a function which will check to see if the current character being looped over is a valid character. 
I went for this approach instead of a regex as I read online that sometimes regexs are not the best method for performing such a small task >>> but instead this method is over 150% faster.

`function isAlphaNumeric(char) {
    const charCode = char.charCodeAt(0)
    if (!(charCode > 47 && charCode < 58) &&
        !(charCode > 64 && charCode < 91) &&
        !(charCode > 96 && charCode < 123)) {
        return false
    }
    return true
}`
