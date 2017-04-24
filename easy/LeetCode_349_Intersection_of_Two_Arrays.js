/*
## 題目

Given two arrays, write a function to compute their intersection.
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
Note:
Each element in the result must be unique.
The result can be in any order.

## 翻譯

尋找兩個陣列的交集。
範例：
nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，return [2]。
注意：
同樣的數字只出現一次，回傳的陣列內容不限排序。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	//空的直接回傳
    if ( nums1.length === 0 || nums2.length === 0 ) {
    	return [];
    }
    //先找分出陣列長短
    let long_array = nums1;
    let short_array = nums2;

    if ( nums1.length < nums2.length ) {
    	long_array = nums2;
    	short_array = nums1;
    }

    let result = [];
    //短的開始跑, 有交集到就存入, result 但要排除重複
    for ( let i = 0; i < short_array.length; i++ ) {
    	if ( long_array.indexOf(short_array[i]) > -1
    		&& result.indexOf(short_array[i]) == -1 ) {
    		result.push(short_array[i]);
    	}
    }
    return result;
};