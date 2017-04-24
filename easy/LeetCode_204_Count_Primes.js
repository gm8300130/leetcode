/*
## 題目

Description:
Count the number of prime numbers less than a non-negative number, n.

## 翻譯

給一個n，計算比n小的質數有幾個。
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {

    // 等於3時, 才會出現一個比n小的質數2
    if ( n < 3 ) {
    	return 0;
    }

    let count = 1;
    //跳過2的倍數, 偶數不會是質數, 自己是質數的話不計算
    for ( let i = 3; i < n; i += 2 ) {
    	//只要除到平方根
    	for ( let j = 3; j * j <= i; j += 2 ) {
    		//被比自己小的數除盡, 代表不是質數
    		if ( i % j == 0 ) {
    			count--;
    			break;
    		}
    	}
    	count++;
    }
    return count;
};