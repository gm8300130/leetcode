/**
 *
LeetCode 344. Reverse String

題目:
Write a function that takes a string as input and returns the string reversed.
Example: Given s = "hello", return "olleh".

翻譯:
將一個字串反轉後回傳。
範例： s= "hello", return "olleh"
 */

var reverseString = function(s) {

	let input_array = [];
	//es6 可以直接for 字串
	for (let input_string of s ) {
		//push 把值加入陣列最後面
		input_array.push(input_string);
	}
	//reverse 倒排陣列
	input_array.reverse();
	//join 陣列轉字串
	return input_array.join('');
};

//reverseString('hello')