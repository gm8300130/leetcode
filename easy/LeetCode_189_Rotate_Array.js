/*
## 題目

Rotate an array of n elements to the right by k steps.
For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
Note: Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

Hint:
Could you do it in-place with O(1) extra space?

## 翻譯

給一個n值，n代表陣列中包含1~n個元素與一個整數k，將陣列裡面的元素向右旋轉k次。

範例：
```
n=7,k=3, array[1,2,3,4,5,6,7] -->  [5,6,7,1,2,3,4]
```

提示：
你能用額外空間O(1)來實作嗎？
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Run Time 225ms
 */
var rotate = function (nums, k) {

    let ts = k % nums.length;

    for ( let i = 0; i < ts; i++ ) {
        nums.unshift(nums[nums.length - 1]);
        nums.pop();
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Run Time 209ms
 */
var rotate = function (nums, k) {

    let ts = k % nums.length;

    for ( let i = 0; i < ts; i++ ) {
        let value = nums.pop();
        nums.unshift(value);
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Run Time 179ms
 */
var rotate = function (nums, k) {

    let ts = k % nums.length;
    let num_len = nums.length;

    let temp = [];

    for ( let i = num_len - 1; i >= (num_len - ts); i-- ) {
        //取出要移動到前面的元素
        temp.unshift(nums[i]);
    }

    for ( let j = num_len - 1; j >= 0; j-- ) {

        if ( j >= ts ) { 
            //把沒動到的元素往後推k格
            nums[j] = nums[j - ts];
        } else {
            nums[j] = temp[j];
        }
    }
};