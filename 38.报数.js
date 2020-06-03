/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let str = ''
    function baoshu(str) {
        if (str === '1') return '11'
        var s = ''
        var arr = str.split('')
        let j = 0
        for (i = 1; i < arr.length; i++) {
            j++
            if (arr[i - 1] != arr[i]) {
                s = s + j + arr[i - 1]
                j = 0
            }

            if (i === arr.length - 1) {
                j++
                s = s + j + arr[i]
            }
        }
        return s
    }
    if (n === 1) {
        str = '1'
    }
    if (n > 1) {
        str = '1'
        for (l = 1; l < n; l++) {
            str = baoshu(str)
        }

    }
    return str
};
// countAndSay(4)
