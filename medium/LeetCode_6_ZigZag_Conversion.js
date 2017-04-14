/*

## 題目

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
`P   A   H   N
A P L S I I G
Y   I   R`
And then read line by line: "PAHNAPLSIIGYIR" Write the code that will take a string and make this conversion given a number of rows:
`string convert(string text, int nRows);`
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

## 翻譯

字串"PAYPALISHIRING"經過Z字轉換後如圖所示，重組後變成"PAHNAPLSIIGYIR"， 寫一個convert(string text, int nRows)來將傳入的字串text轉換成n行的Z字轉換。
convert("PAYPALISHIRING", 3) 會回傳 "PAHNAPLSIIGYIR"。

這邊用另外一個範例來解釋會比較清楚：
text = "ABCDEFGHIJKLMN", n = 4，排成Z字如下，因此轉換後的字串為 "AGMBFHLNCEIKDJ"
A     G     M
B   F H   L N
C E   I K
D     J

Z字行轉換也就是波浪行

.reduce用法
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
https://aotu.io/notes/2016/04/14/js-reduce/
https://msdn.microsoft.com/zh-cn/library/ff679975(v=vs.94).aspx

.concat
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

	if (s.length < numRows || numRows ===1) {
		return s;
	}

	let rows = [];
	let reverse = false;
	let count = 0;
	let ans = '';

	//建立儲存位置空陣列
    for (let i = 0; i < numRows; i++) {
    	rows[i] = [];
    }

    for (let i = 0; i < s.length; i++) {
    	//依位置儲存字串
    	rows[count].push(s[i]);

    	if ( !reverse) {
    		count++;
    	} else {
    		count--;
    	}

    	if (count === numRows-1 || count === 0) {
    		//狀態相反, 控制寫入陣列位置
    		reverse = !reverse;
    	}
    }
	//reduce 方法將數組中的每一個值與前面的被返回相加的總和(初試值為數組的第一個值或者initialValue)
	ans = rows.reduce(function(pre, cur){
		//.concat 合併陣列, 產生一個新陣列
		return pre.concat(cur);

    });

    return ans.join('');
};
