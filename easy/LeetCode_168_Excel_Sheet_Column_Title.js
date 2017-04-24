/*
## 題目

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB

## 翻譯

給一個正整數，回傳在excel表格中對應的欄位。

 */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
	//英文字母總數
	let base = 26;
	//charcode(A) = 65; (Z) = 90;
	let charcode_to_num = 'A'.charCodeAt();
	//小於27(A~Z), 可以直接顯示
	if ( n - 1 < base ) {
	    return String.fromCharCode( (n - 1) % base + charcode_to_num);
	}

	let str = '';
	let excel_str = '';

	while ( n > 0 ) {
	    str = String.fromCharCode( (n - 1) % base + charcode_to_num);
	    n = parseInt( (n - 1) / base);
		excel_str = str + excel_str;
	}

	return excel_str;
};