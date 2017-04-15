/*
## 題目

Compare two version numbers version1 and version2. If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character. The . character does not represent a decimal point and is used to separate number sequences.

For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

```
0.1 < 1.1 < 1.2 < 13.37
```

## 翻譯

比較兩個版本號，version1與version2，如果version1 > version2 回傳1，如果version2 > version1 回傳-1，相等的話回傳0。
你可以假設版本號裡面只有數字跟"."，"."在這邊不是表示小數點而是用來分割子版本的序號。

舉例來說，2.5不是數字2+0.5，而是第2.5版。

下面是一些範例
0.1 < 1.1 < 1.2 < 13.37

 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {

	let version1_array = version1.split('.');
	let version2_array = version2.split('.');
	let version1_len = version1_array.length;
	let version2_len = version2_array.length;
	let len_max = Math.max(version1_len, version2_len);

	for (let i = 0; i < len_max; i++) {
		//符合 !version1_array[i] 就是比較短的字串, 直接補0
		let version1_int = !version1_array[i] ? 0 : parseInt(version1_array[i]);
		let version2_int = !version2_array[i] ? 0 : parseInt(version2_array[i]);

		if (version1_int > version2_int) {
			return 1;
		} else if (version1_int < version2_int) {
			return -1;
		}
	}
	return 0;
};

compareVersion('1', '0');//1
compareVersion('1.1', '1.2');//-1
compareVersion('2.1', '1.0');//1
compareVersion('3.2', '3.2');//0
compareVersion('10.2.1', '10.2');//1
