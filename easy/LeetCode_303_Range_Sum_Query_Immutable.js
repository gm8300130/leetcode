/*
## 題目

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
```
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```

Note:
You may assume that the array does not change.
There are many calls to sumRange function.

## 翻譯

給一個int陣列，寫一個sumRange方法找尋陣列中元素i~j的總和。
範例： nums = [-2, 0, 3, -5, 2, -1]
sumRange(0, 2) -> 1 sumRange(2, 5) -> -1 sumRange(0, 5) -> -3
注意：你不能改變傳入陣列的值，然後sumRange會被忽叫很多次。
*/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    let sum = 0;
    this.array = [];
    // 先將加總存起來
    for (let i in nums) {
        sum += nums[i];
        this.array.push(sum);
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i === 0) {
        return this.array[j];
    }
    // 取出的時候, 只取 array[0]~[j]的加總 減去 array[0]~[i]的加總, 等於array[i]~[j]的加總
    return this.array[j] - this.array[i - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */