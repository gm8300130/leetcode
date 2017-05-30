/*
## 題目

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

## 翻譯

你是一個產品經理，目前正帶領一個團隊開發新產品，不幸的是，如果有一個新版的產品沒通過測試，在這版本之後全部的新版本都不會通過測試。
假如你有n個版本的產品[1,2, ...,n]，然後你想追蹤是從哪一個版本開始沒通過測試。
這邊有一個 isBadVersion(version) API可以判斷這個版本能不能通過測試。利用這個API實作一個functon來找到第一個壞掉的版本。
範例：
假如目前有5個版本，[1,2,3,4,5]，從第4個版本開始都是壞掉的，一個一個版本丟入API驗證會得到 [true,true,true,false,false]。

*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let min = 0;
        let max = n;
        let mid; 

        while (max > min) {
            mid = min + parseInt((max - min) / 2);
            if (isBadVersion(mid)) {
                max = mid;
            } else {
                min = mid + 1;
            }
        }
        return max;
    };
};

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        return search(0, n);
    };

    function search(i, j) {
        if (i === j) {
            return i;
        }
        let mid = Math.floor((i + j) / 2);
        
        return isBadVersion(mid) ? search(i, mid) : search(mid + 1, j);
    }
};