/*
題目

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

翻譯

給一個只包含'(', ')', '{', '}', '[' , ']'這些括號字元的字串，判斷這些括號是不是合法的。 右括號必須依照正確的順序出現，"()" 與 "()[]{}" 都是合法的，但"(]" 和 "([)]"就不是。

stack 先進後出
https://www.foolegg.com/introducing-the-queue-and-stack-data-structures-of-javascript/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

	if (s.length %2 !== 0) {
		return false;
	}

	var left_temp = [];
    var lefe_parentheses = ['(', '[', '{'];
    var right_parentheses = [')', ']', '}'];
    //建立對應, 判斷用
    var match_parentheses = {
    	')' : '(',
    	']' : '[',
    	'}' : '{'
    }

    for (let str of s) {
    	//indexof > -1 代表有找到符合字元
    	if (lefe_parentheses.indexOf(str) > -1) {
    		//push  從陣列最後一位開始加入
    		left_temp.push(str);
    	}

    	if (right_parentheses.indexOf(str) > -1) {
    		//pop 陣列最後一位移除
    		var right_temp = left_temp.pop();
    		if (match_parentheses[str] != right_temp) {
    			return false;
    		}
    	}
    }

    return left_temp.length === 0;
};