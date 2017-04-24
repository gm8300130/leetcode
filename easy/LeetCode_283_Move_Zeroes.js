/*
## 題目

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

## 翻譯

給一個陣列，把裡面出現的0搬到陣列最後面，剩下的元素保持原本的排序。
範例：
nums = [0, 1, 0, 3, 12] ，執行後回傳[1, 3, 12, 0, 0]
注意：
只能在當前陣列中操作，不能用一個新的陣列來解。盡量減少操作次數。

 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let count = 0;

    for ( let i = 0; i < nums.length; i++ ) {
    	if ( nums[i] != 0 ) {
            //把非0重新存入陣列, count 也可以是 index的意思
            nums[count++] = nums[i];
    	}
    }
    //最後看差幾個補0回去
    for ( count; count < nums.length; count++ ) {
        nums[count] = 0;
    }
};