/*
## 題目

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.

## 翻譯

給一個陣列nums跟一個整數k，判斷能不能在陣列中找到nums[i] = numsj，而且i跟j的距離不能比k還大。
範例:
nums = [1,2,3,4,1] k=3; nums[0] = nums[4] = 1 , j=4, i=0, i,j距離為4比k還大，因此為false nums = [1,2,3,4,1] k=4; nums[0] = nums[4] = 1 , j=4, i=0, i,j距離為4沒有比k大，因此為true
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    if ( nums.length <= 1 ) {
        return false;
    }

    let map = {};
    //for ( let i = 0; i < nums.length; i++ ) { 
    //會造成數字0影響之後判斷錯誤, map{1} = 0 會當成空
    //要用for in
    for ( let i in nums ) {
        if ( map[nums[i]] && (i - map[nums[i]] <= k) ) {
            return true;
        }
        map[nums[i]] = i;
    }
    return false;
};