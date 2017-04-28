/*
## 題目

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
Note: You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively

## 翻譯

給兩個已經排序過的的整數陣列nums1與nums2，將nums2合併入nums1之中
注意：
nums1會有有足夠的空間可以塞入兩個陣列(nums1.length = m+n)，m為nums1的元素數量，n為nums2的元素數量
範例： nums1 = [1,1,2,4,6,null,null,null], m = 5, nums2 = [2,3,7], n = 3
合併後 nums1 = [1,1,2,2,3,4,6,7]
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let index = 0;

    for ( var i = m; i < ( m + n ); i++ ) {
        nums1[i] = nums2[index++];
    }
    nums1.sort(function (a, b) {
        return a - b;
    });  
};