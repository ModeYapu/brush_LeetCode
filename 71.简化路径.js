/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const pathArr = path.split('/');
    
    for (let item of pathArr) {
        if (item === '' || item === '.') {
            continue;
        } else if (item === '..') {
            stack.pop();
        } else {
            stack.push(item);
        }
    }

    return '/' + stack.join('/');
};
// @lc code=end

