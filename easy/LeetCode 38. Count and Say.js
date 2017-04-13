/*
## 題目
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

----------

其他人說明的題目比較清晰...

"Count and Say problem" Write a code to do following:

n String to print
0 1
1 1 1
2 2 1
3 1 2 1 1
...
Base case: n = 0 print "1"
for n = 1, look at previous string and write number of times a digit is seen and the digit itself. In this case,

```
digit 1 is seen 1 time in a row... so print "1 1"

for n = 2, digit 1 is seen two times in a row, so print "2 1"

for n = 3, digit 2 is seen 1 time and then digit 1 is seen 1 so print "1 2 1 1"

for n = 4 you will print "1 1 1 2 2 1"
```

Consider the numbers as integers for simplicity. e.g. if previous string is "10 1" then the next will be "1 10 1 1" and the next one will be "1 1 1 10 2 1"


----------

## 翻譯

這是一個算完說出來的序列，序列如下：
1, 11, 21, 1211, 111221, ...


```
1     讀做 1個1， 所以下一個變成 11
11    讀做 2個1， 也就是21
21    讀做 1個2 1個1，得到1211
1211  1個1，1個2，2個1  111221
```
備註：
整數序列將被表示為一個字串

<br />

`搞了好久一開始完全理解錯誤..`

思路：題意實在太難理解了，尤其是英文又不好，只能參看下別人的資料，理解下規則。
終於理解，題意是n=1時輸出字符串1；
n=2時，數上次字符串中的數值個數，因為上次字符串有1個1，所以輸出11；
n=3時，由於上次字符是11，有2個1，所以輸出21；
n=4時，由於上次字符串是21，有1個2和1個1，所以輸出1211。
依次類推，寫個countAndSay(n)函數返回字符串。
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

	if (n == 1) {
		return '1';
	}

	var ans = '';
	//遞回 有點像自己呼叫自己
	var str = countAndSay(n - 1);
	console.log([n, str]);
	var n_array = str.split('');
	var count = 1;

	for (let i = 0; i < n_array.length; i++) {
		if (n_array[i] == n_array[i+1]) {
			count ++;
		} else {
			ans = ans + count + n_array[i];
			//初始化
    		count = 1;
		}
	}

    return ans;
};

countAndSay('1');
countAndSay('2');
countAndSay('3');
countAndSay('4');
