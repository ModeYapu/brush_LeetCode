/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //  nums1=nums1.slice(0,m)
    //  nums2=nums2.slice(0,n)
    //  nums1=nums1.concat(nums2)
    //  nums1.sort((a,b)=>{return a-b})
    //  console.log(nums1)
    //  nums1=newNums
    while(n>0){
        if(nums1[m-1]>=nums2[n-1]){
            nums1[n+m-1]=nums1[--m]
        }else{
            nums1[n+m-1]=nums2[--n]
        }
    }
};
// merge([1,2,3,0,0,0],3,[2,5,6],3)
