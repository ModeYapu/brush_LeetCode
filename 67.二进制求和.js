/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aArr = ("" + a).split("");
  let bArr = ("" + b).split("");
  let resA = aArr.reverse(),
    resB = bArr.reverse(),
    res = [],
    faster = 0,
    l = resA.length > resB.length ? resA.length : resB.length;
  for (i = 0; i <= l; i++) {
    let co =
      parseInt(resA[i] ? resA[i] : 0, 2) +
      parseInt(resB[i] ? resB[i] : 0, 2) +
      parseInt(faster, 2);
    faster = 0;
    if (co >= 2) {
      faster = parseInt(co / 2);
      res.push(co % 2);
    } else {
      res.push(co);
    }
  }
  if(res[res.length-1]===0) res.pop()
  return res.reverse().join("");
};
