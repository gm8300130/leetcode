/*
## 題目

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number is higher or lower.

You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

```
-1 : My number is lower
 1 : My number is higher
 0 : Congrats! You got it!
 ```
 
Example:
```
n = 10, I pick 6.

Return 6.
```

## 翻譯

給一個n值，猜一個1~n之間神秘數字x，根據猜測的結果回傳值，如果回傳-1代表神秘數字比你猜的還低，回傳1代表比你猜的還高，回傳0代表你猜對了。最後你要回傳x到底是多少。

範例

n = 10 , 神秘數字是6 , 猜3 得到 -1, 猜8 得到1, 猜6 得到0, 因此要回傳答案 6
*/
/**
 * 
 * @param {*} n 
 * @param {*} num 
 */
var guess = function (n, num) {
 
    const min = 1;
    const max = n;
    const mid = (min + max) / 2;
    let res = Math.floor(mid);

    while (res != num) {
        if (res > num) {
            res--;
        } else {
            res++;
        }
    }
    return res;
};
guess(10, 6);

// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);

class Solution {
public:
    int guessNumber(int n) {
        int max_num = n;
        int min_num = 1;
        int mid_num;
        while (true) {
            mid_num = (max_num - min_num) / 2 + min_num;
            int res = guess(mid_num);
            if (res == 0) {
                return mid_num;
            }
            else if (res == -1) {
                max_num = mid_num - 1;
            } else {
                min_num = mid_num + 1;
            }
        }

    }
};


