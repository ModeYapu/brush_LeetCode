/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums||nums.length==0)  return 0
    let length=1
    for(let i=1,l=nums.length;i<l;i++){
        if(nums[i]!==nums[i-1]){
            nums[length++]=nums[i]
        }
    }
    return length
    // for(let i=0,length=nums.length;i<length;i++){
    //    if(typeof nums[i] =='number'&&nums[i]==nums[i+1]){
    //      nums.splice(i,1)   
    //      removeDuplicates(nums)         
    //     }
    // }
    // return nums.length
};

