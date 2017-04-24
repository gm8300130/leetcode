/*
## 題目

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.

## 翻譯

長度為n的陣列，找出一個出現n/2次以上的主要元素，假設陣列不會是空值，而且總是會有主要元素存在陣列中。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    if ( nums.length === 1 ) {
    	return nums;
    }
    let map = {};

    for ( let i = 0; i < nums.length; i++ ) {
    	//空的就寫入
    	if ( !map[nums[i]] ) {
    		map[nums[i]] = 1;
    	} else {
    		//已有值就+1
    		map[nums[i]]++;
    		if ( map[nums[i]] >= nums.length / 2 ) {
    			return nums[i];
    		}
    	}
    }


};