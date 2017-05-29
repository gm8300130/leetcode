/*
## 題目

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

## 翻譯

你是一個專業的小偷，今天你打算偷遍一整條街的房子，每間房子都一定有錢可以偷。不過有一個問題，就是房子之間有設警報系統，如果你連偷兩間相鄰的房子，警報系統就會引來警察，你就會被抓。
這邊會給一個list，裡面每個元素都代表這間房子內可以偷到的錢，你要怎麼安排你的偷竊計畫才能偷到最多的錢而且不會驚動警察。
範例：
[2,4,5,3]，最多可以偷到 2+5+3 = 10，因為4+5+3 = 12雖然可以拿到比較多錢，但是會被警察抓。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let max_money = [];

    if (nums.length == 0) {
        return 0;
    }
    if (nums.length == 1) {
        return nums[0];
    }
    if (nums.length == 2) {
        return Math.max(nums[1], nums[0]);
    }

    max_money.push(nums[0]);
    max_money.push(Math.max(nums[1], nums[0]));

    for (let i = 2; i < nums.length; i++) {
        // 最大金額 = 現在這棟金額＋前前一次的最大金額 跟 前一次的最大金額
        max_money[i] = Math.max(nums[i] + max_money[i - 2], max_money[i - 1]);
    }

    return max_money.pop();
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 0) {
        return 0;
    }
    
    let max_money = [];
    max_money[0] = nums[0];
    max_money[1] = Math.max(nums[1], nums[0]);

    for (let i = 2; i < nums.length; i++) {
        max_money[i] = Math.max(nums[i] + max_money[i - 2], max_money[i - 1]);
    }
    return max_money[nums.length - 1];
}
