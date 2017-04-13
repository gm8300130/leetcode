/*
題目

The count-and-say sequence is the sequence of integers beginning as follows: 1, 11, 21, 1211, 111221, ...
1 is read off as "one 1" or 11. 11 is read off as "two 1s" or 21. 21 is read off as "one 2, then one 1" or 1211. Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

翻譯

這是一個算完說出來的序列，序列如下：
1, 11, 21, 1211, 111221, ...

1     讀做 1個1， 所以下一個變成 11
11    讀做 2個1， 也就是21
21    讀做 1個2 1個1，得到1211
1211  1個1，1個2，2個1  111221

備註
整數序列將被表示為一個字串
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var n = n.toString();

    if (n.length <= 1) {
    	return '1' + n;
    }

    var num = n.charAt(0);
    var count = 1;
    var ans_array = [];

    for (var i = 1; i < n.length; i++) {
    	if (n[i] != n[i-1]) {
    		ans_array.push(count + num);
    		num = n[i];
    		count = 1;
    	} else {
    		count++;
    	}
    }
    ans_array.push(count + num);
    return ans_array.join('');
};

countAndSay('1');
countAndSay('11');
countAndSay('21');
countAndSay('1211');
