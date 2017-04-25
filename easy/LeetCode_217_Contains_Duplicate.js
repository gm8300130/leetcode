/*
# LeetCode 217. Contains Duplicate

## 題目

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

## 翻譯

解題方向與169. Majority Element完全相通，使用map，當一個元素count = 2時，回傳true，迴圈如果跑完回傳false。

 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let map = {};

    for ( let i = 0; i < nums.length; i++ ) {
    	if ( !map[nums[i]] ) {
    		map[nums[i]] = 1;
    	} else {
    		return true;
    	}
    }
    return false;
};