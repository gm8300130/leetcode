/*
## 題目

Given two arrays, write a function to compute their intersection.
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

## 翻譯

尋找兩個陣列的交集。

範例：
nums1 = [1, 2, 2, 1]，nums2 = [2, 2]， return [2,2]

注意：
同樣的數字在回傳的陣列中可重複出現
回傳的陣列可以不管裡面的數字排序
進階：
如果陣列已經排序過，如何最佳化演算法?
如果nums1長度小於nums2長度，如何最佳化演算法?
如果nums2儲存在光碟上，所以無法一次讀盡所有的元素，要怎麼處理?

 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    let long_array = nums1;
    let short_array = nums2;
    //找出最短陣列
    if ( nums1.length < nums2.length ) {
    	long_array = nums2;
    	short_array = nums1;
    }
    //數字排序
    long_array.sort(function(a, b){
    	return a - b;
    });
    short_array.sort(function(a, b){
    	return a - b;
    });

    let result = [];

    for ( let i = 0, j = 0; i < short_array.length; ) {
        //當long 比完就跳出
        if ( j === long_array.length ) {
            break;
        }
        //當short 比較小就往下一個index前進
        if ( short_array[i] < long_array[j] ) {
            i++;
        //反之
        } else if ( short_array[i] > long_array[j] ) {
            j++;
        }
        //當符合就存入result, 兩個陣列都前進
        if ( short_array[i] == long_array[j] ) {
            result.push(short_array[i]);
            i++;
            j++;
        }
    }
    return result;
};