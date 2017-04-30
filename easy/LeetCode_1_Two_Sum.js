/*
## 題目

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## 翻譯

給一個裡面元素為int的陣列，陣列中會有兩個元素加起來等於target，回傳這兩個元素的位置。

範例：
[2, 7, 11, 15], target = 9，2+7=9，因此回傳[1,2]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //Time Limit Exceeded
    for ( let i = 0; i < nums.length; i++ ) {
        for ( let j = i + 1; j < nums.length; j++ ) {
            if ( target == nums[i] + nums[j] ) { 
                return [i, j];
            }
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * //Run Time 119 ms
 */
var twoSum = function (nums, target) {

    let map = {};
    
    for ( let i = 0; i < nums.length; i++ ) {       
        //如果符合, 代表已經存過位置, 就直接回傳
        if ( map[target - nums[i]] >= 0 ) { 
            return [map[ target - nums[i] ], i]
        }
        map[nums[i]] = i;
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * //Run Time 159 ms
 */
var twoSum = function (nums, target) {

    let map = new Map();

    for ( let i = 0; i < nums.length; i++ ) {
        //如果符合, 代表已經存過位置, 就直接回傳
        if ( map.has(target - nums[i]) ) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
};