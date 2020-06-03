/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<0) return NaN
    if(x===0||x===1) return x
    var val=x,
    last;
    // 牛顿迭代
    // https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E6%B3%95
    do{
       last=val
       val=(val+x/val)/2
    }
    // 使用Number.EPSILON表示能够接受的最小误差范围
    while(Math.abs(val-last)>=Number.EPSILON)
    return parseInt(val)
};

