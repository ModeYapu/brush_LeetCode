/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const absDividend = Math.abs(dividend);
    const absDivisor = Math.abs(divisor);
    const isMinus = (dividend === absDividend ? 1 : -1) ^ (divisor === absDivisor ? 1 : -1);
    let res = divideDichotomy(absDividend, absDivisor, 0);
  
    if (isMinus) res = -res;
    if (res > 2147483647) return 2147483647;
    if (res < -2147483648) return -2147483648;
    return res;
};
function divideDichotomy(absDividend, originAbsDivisor, res) {
  if (absDividend < originAbsDivisor) return res;
  let count = 1;
  let absDivisor = originAbsDivisor;
  while (absDividend >= absDivisor) {
    const nextAbsDivisor = absDivisor + absDivisor;
    if (absDividend === nextAbsDivisor) return count + count + res;
    if (absDividend < nextAbsDivisor)
      return divideDichotomy(
        absDividend - absDivisor,
        originAbsDivisor,
        res + count
      );
    absDivisor = nextAbsDivisor;
    count += count;
  }
}

// @lc code=end
