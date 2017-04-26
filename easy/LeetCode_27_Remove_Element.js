/*
## 題目

Given an array and a value, remove all instances of that value in place and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.
Example: Given input array nums = [3,2,2,3], val = 3
Your function should return length = 2, with the first two elements of nums being 2.

## 翻譯
給一個陣列跟一個數字，移除陣列中所有跟數字相同的元素。
不可以使用另外的陣列來處理，全部的操作都要在同一個陣列中。
陣列中的元素可以隨意排序。

範例：  
```
nums = [3, 1, 2, 3, 2]， val = 3  
應該要return 陣列的長度3，因為裡面的3被移除後剩[1,2,2].
```
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    if ( nums.indexOf(val) < 0 ) {
        return nums.length;
    }

    let index = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        let element = nums[i];

        if ( element !== val ) {
            nums[index++] = element;
        }
    }  
    return index;
};