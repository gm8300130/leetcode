/*
# LeetCode 14. Longest Common Prefix

## 題目

Write a function to find the longest common prefix string amongst an array of strings.+

## 翻譯

一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首。

範例：
['abcd','abccc','abdec'] --> 共同字首為 'ab' 。

 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if (!strs || strs.length ===0) {
    	return '';
    }

    //表示目前發現的共同字首, 一開始取第一個字串
    var same_str = strs[0];

    //只需要比對跟same_str 共同字串有多少就好
    for (let i = 1; i < strs.length; i++) {
    	var str = strs[i];
		// j=0 移出迴圈宣告, 避免有完全不符合
		var j = 0;
    	for (; j < same_str.length; j++) {
	    	if (same_str[j] != str.charAt(j)) {
	    		break;
	    	}
	    }
	    //看same_str 與目前字串str前幾位相同, 作為新的same_str
	    same_str = same_str.slice(0, j);
    }

    return same_str;

};