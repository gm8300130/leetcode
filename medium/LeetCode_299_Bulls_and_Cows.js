/*
## 題目

You are playing the following [Bulls and Cows](https://en.wikipedia.org/wiki/Bulls_and_Cows) game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

For example:
```
Secret number:  "1807"
Friend's guess: "7810"
```
Hint: `1` bull and `3` cows. (The bull is `8`, the cows are `0`, `1` and `7`.)
Write a function to return a hint according to the secret number and friend's guess, use `A` to indicate the bulls and `B` to indicate the cows. In the above example, your function should return `"1A3B"`.

Please note that both secret number and friend's guess may contain duplicate digits, for example:
```
Secret number:  "1123"
Friend's guess: "0111"
```
In this case, the 1st `1` in friend's guess is a bull, the 2nd or 3rd `1` is a cow, and your function should return "1A1B".

You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.

## 翻譯

[猜數字遊戲](https://codepen.io/skyyen999/full/VedwqQ)，上面那一大串英文的意思是，這邊有一串隱藏的號碼(secret number)，然後你朋友會猜一串號碼， 如果號碼數字與位置都對了，給一個bull，數字對但位置不對，給一個cow。
範例:

Secret number:  "1807"
Friend's guess: "7810"
上面範例可以發現8得到一個bull，剩下1,0,7得到一個cow，所以得到1A3B
Secret number:  "1123"
Friend's guess: "0111"
第二個範例，第二個1得到一個bull，Friend's guess 第三個1得到一個cow(比對secret number的第一個1)，因此得到1A1B


*/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {

    let bull = 0;
    let cow = 0;

    // 儲存secret[n], guess[n] 不同數字
    let secret_keep = [];
    let guess_keep = [];

    // 先判斷位置數字都一樣, 剩下的keep起來
    for (let i in guess) {
        // 位置數字都一樣，bull++
        if (secret[i] == guess[i]) {
            bull++;
        } else {
            secret_keep.push(secret[i]);
            guess_keep.push(guess[i]);
        }
    }

    // 因為bull已處理, guess_keep 有出現在 secret_keep 就是一個cow
    for (let j in guess_keep) {
        let findIndex = secret_keep.indexOf(guess_keep[j]);

        if (findIndex != -1) {
            cow++;
            secret_keep[findIndex] = null;
        }
    }

    return bull + "A" + cow + "B";
};

