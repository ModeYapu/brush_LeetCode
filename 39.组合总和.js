/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let n = candidates.length;
    let res = [];
    let tmpPath = [];
    let backtrack = (tmpPath,target,start) => {
        if(target < 0){
            return;
        }
        if(target == 0){
            res.push(tmpPath);
            return;
        }
        for(let i = start;i < n;i++){
            tmpPath.push(candidates[i]);
            backtrack(tmpPath.slice(),target - candidates[i],i);
            tmpPath.pop();
        }
    }
    backtrack(tmpPath,target,0);
    return res;
};
// @lc code=end

