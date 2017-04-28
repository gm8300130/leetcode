/*
## 題目

Given an index k, return the kth row of the Pascal's triangle.
For example, given k = 3, Return [1,3,3,1].
Note: Could you optimize your algorithm to use only O(k) extra space?

## 翻譯

給一個指標k，回傳第k階的Pascal's三角形。
範例：
k=3，回傳[1,3,3,1]。
注意：你能改善演算法只用O(k)的額外空間嗎?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    let ans = [];

    for ( let i = 0; i <= rowIndex; i++ ) {
        for ( var j = 0; j <= i; j++ ) {
            if ( !ans[i] ) {
                ans[i] = new Array(j);
            }
            if ( j === 0 || j === i ) {
                ans[i][j] = 1;
            } else {
                //上一階的前位數＋本位數
                ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
            }
        }  
    }
    return ans[rowIndex];
}