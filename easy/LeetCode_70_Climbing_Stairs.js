/*
# LeetCode 70. Climbing Stairs

## 題目

You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

## 翻譯

你正在爬一個階梯。到頂端總共需走n階。
每次你都可以選擇爬1階或2階，問有幾種不同的方法可以爬到階梯頂端
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) {
        return 1;
    }
    
    let cur = 1;
    let prev = 1;
    // 費氏數列 f(n) = f(n-1) + f(n-2)
    for (let i = 2; i <= n; i++) {
        let temp = cur;
        cur = cur + prev;
        prev = temp;
    }
    return cur;

};

/**
 * @param {number} n
 * @return {number}
 * 此做法會超時
 */
var climbStairs = function(n) {
    if (n <= 1) {
        return 1;
    }
    // 費氏數列 f(n) = f(n-1) + f(n-2) 遞回
    return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    let new_array = [];
    new_array[0] = 0;
    new_array[1] = 1;
    new_array[2] = 2;

    for (let i = 3; i <= n; i++) {
        // 費氏數列 f(n) = f(n-1) + f(n-2)
        new_array[i] = new_array[i - 1] + new_array[i - 2];
    }
    return new_array[n];
};