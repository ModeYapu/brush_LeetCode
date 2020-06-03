/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

   // if(digits[0]===9) return [1,0]
   var i, temp, tempA, tempB, len, lenA, lenB, carry = 0;
   var arrA = digits,
      arrB = [1],
      cloneArr = [],
      res = [];
   arrA.reverse();
   lenA = arrA.length;
   lenB = arrB.length;
   len = lenA > lenB ? lenB : lenA;
   
   for (i = 0; i < len; i++) {
      tempA = parseInt(arrA[i], 10);
      tempB = parseInt(arrB[i], 10);
      temp = tempA + tempB + carry;
      if (temp > 9) {
         res.push(temp - 10);
         carry = 1;
      } else {
         res.push(temp);
         carry = 0;
      }
   }
   cloneArr = lenA > lenB ? arrA : arrB;
   for (; i < cloneArr.length; i++) {
      tempA = parseInt(cloneArr[i], 10);
      temp = tempA + carry;
      if (temp > 9) {
         res.push(temp - 10);
         carry = 1;
      } else {
         res.push(temp);
         carry = 0;
      }
   }
   if(res[res.length-1]===0){
      res[res.length]=1
   }
   return res.reverse()
};
// plusOne([9,9])
