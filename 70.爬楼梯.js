/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	//  数组去重
	// function unique(arr) {
	// 	if (!Array.isArray(arr)) {
	// 		console.log('type error!');
	// 		return;
	// 	}
	// 	let res = [],
	// 		obj = {};
	// 	for (let i = 0; i < arr.length; i++) {
	// 		if (!obj[arr[i]]) {
	// 			res.push(arr[i]);
	// 			obj[arr[i]] = 1;
	// 		} else {
	// 			obj[arr[i]]++;
	// 		}
	// 	}
	// 	return res;
	// }
	// class Permutation {
	// 	constructor(arr) {
	// 		this.arr = Array.from(arr);
	// 		this.result = [];
	// 		this.len = 0;
	// 		this.run(0);
	// 	}

	// 	run(index) {
	// 		if (index == this.arr.length - 1) {
	// 			this.result.push(Array.from(this.arr));
	// 			this.len++;
	// 			return;
	// 		}
	// 		for (let i = index; i < this.arr.length; i++) {
	// 			[this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
	// 			this.run(index + 1);
	// 			[this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
	// 		}
	// 	}
	// }

	// var count = 1;
	// let l = parseInt(n / 2);
	// for (let i = 1; i <= l; i++) {
	// 	let arr = [];
	// 	for (let j = 1; j <= n - i; j++) {
	// 		if (j <= i) {
	// 			arr.push(2);
	// 		} else {
	// 			arr.push(1);
	// 		}
	// 	}
	// 	let p = new Permutation(arr);
	// 	// console.log('p:', p.result, 'len:', p.len);
	// 	let rest=unique(p.result)
	// 	count=count+ rest.length;
	// }
	// console.log('count:',count)
    // let steps = [1 ,1];
	// for (let i = 2; i < n + 1; i++) {
	// 	steps.push(steps[i - 1] + steps[i -2]);
	// }
    // return steps[n];
    var prev1 = 1;
    var prev2 = 0;
    var out = 0;
    for(var i = 0 ; i < n+1; i++){
        prev2 = prev1;
        prev1 = out;
        out = prev1 + prev2;
    }
    
    return out;
};
// climbStairs(44);
