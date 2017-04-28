/*
## 題目

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.
For example, Given input array nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

## 翻譯

給一個排序過的陣列，移除重複的值，每個元素只能留下一個。
不能使用其他的陣列空間，必需在本來的陣列中操作。
範例： [1,1,2] 去除重複的1之後，剩下[1,2]，回傳陣列的長度2。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //小於2直接回傳
    if ( nums.length < 2 ) {
        return 1;
    }
    //排序
    nums.sort(function (a, b) {
        return a - b;
    });
    //記錄次數
    let index = 0 ;
    for ( var i = 0; i < nums.length; i++ ) {
        //不重複就重寫陣列
        if ( nums[i] != nums[i + 1] ) {
            nums[index++] = nums[i];
        }
    }
    return index;
};