/*
## 題目

Given numRows, generate the first numRows of Pascal's triangle.
For example, given numRows = 5, Return
```
  [
       [1],
      [1,1],
     [1,2,1],
    [1,3,3,1],
   [1,4,6,4,1]
  ]
```

## 翻譯

numRows為列數，產生一個Pascal三角形，例如說 numRows = 5 ，產生三角形如上所示。
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if ( numRows === 0 ) {
        return [];
    }
    
    let ans = new Array(numRows);
    for ( let index = 0; index < numRows; index++ ) {

        for ( let j = 0; j <= index; j++ ){
            //js 二維陣列特性要宣告, 不然會產生`TypeError: Cannot set property '0' of undefined`
            if ( !ans[index] ) {
                ans[index] = new Array(j);
            }
            //開頭結尾都是1
            if ( j === 0 || j === index ) {
                ans[index][j] = 1;
            } else {
                ans[index][j] = ans[index - 1][j - 1] + ans[index - 1][j];  
            }
        }
    }
    return ans;
};