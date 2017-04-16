/*
## 題目

Implement atoi to convert a string to an integer.
Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.
Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
Requirements for atoi:
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.

## 翻譯

實作atoi將字串轉成int。
提示：小心仔細的考慮所有可能的輸入，如果你想挑戰自己，不要看下面的文字，直接想可能的輸入有哪些就可以開始寫了。
注意：這題目的輸入值有各種組合，你要先收集任何可能的輸入。
atoi的需求：
首先輸入的開頭可能是一連串的空白，因此要先找到第一個非空白字元。然後從這個字元開始可能會有正負號在數字的前面，將這些字串轉換成數字。
如果在數字後面有出現其他非數字的符號，因為他們對值沒有影響，可以忽略這些符號。
如果第一個非空白字元不是一個合法的int整數，或者字串裡面都是空白字元，那也視為不合法的輸入。
不合法的輸入回傳0，如果轉換後的數字num > INT_MAX (2147483647) 回傳2147483647， num < INT_MIN (-2147483648) 回傳 -2147483648

 */

/**
 * @param {string} str
 * @return {number}
 * 不用parseInt() Runtime 172ms
 */
var myAtoi = function(str) {
    //迴圈計數
    let i = 0;
    //空白計數
    let j = 0;
    //正規化判斷用
    let reg = /^[0-9]/;
    //符號
    let symbol = '';
    let value = 0;
    //都是空白就直接return
    if (str.replace(' ','') === '') {
        return value;
    }

    while (i < str.length) {
        if (str.charAt(i) == ' ') {
            j++;
        }
        //非空白時進入
        if (j <= i) {
            //非數字
            if ( !reg.test( str.charAt(i) ) ) {
                //如果符號已存在, 代表又一次非數字, 就直接return
                if (symbol != '') {
                    return (symbol + value) * 1;
                }
                //代表是開頭
                if ( (str.charAt(i) == '-' || str.charAt(i) == '+') && value == 0 ) {
                    symbol = str.charAt(i);
                } else {
                    return (symbol + value) * 1;
                }
            }

            //把數字接上去
            if ( reg.test( str.charAt(i) ) ) {
                value += str.charAt(i);
            }

            if ( (symbol + value) * 1 > 2147483647 ) {
                return 2147483647;
            } else if ( (symbol + value) * 1 < -2147483648 ) {
                return -2147483648;
            }
        }
        i++;
    }
    return (symbol + value) * 1;
};

