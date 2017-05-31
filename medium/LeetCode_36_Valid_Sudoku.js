/*
## 題目

Determine if a Sudoku is valid, according to: [Sudoku Puzzles - The Rules](http://sudoku.com.au/TheRules.aspx).

The Sudoku board could be partially filled, where empty cells are filled with the character `'.'`.

![](https://ws3.sinaimg.cn/large/006tKfTcgy1fg4okz0qiqj307907774f.jpg)

A partially filled sudoku which is valid.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

## 翻譯

判斷是不是一個合法的數獨，規則請參考 [Sudoku Puzzles - The Rules](http://sudoku.com.au/TheRules.aspx).
不用填滿數獨，只要判斷是否合法就可以，空的格子在這邊用'.'來代替。
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    var boxs = [[], [], [], [], [], [], [], [], []];

    for (let i = 0; i < 9; i++){
        // 判斷column 是否有重複數字
        let cRow = [];

        // 直接將row丟進去判斷是否有重複
        if (!validRepeat(board[i])) {
            return false;
        }

        for (j = 0; j < 9; j++){
            // board[j = 0~8][i = 0] => 等於把第一個columns的值一個一個抓出來
            cRow.push(board[j][i]);
            // 根據i,j判斷目前位子是屬於哪個九宮格， boxId = 3*(i/3取整數) + (j/3取整數)
            let boxId = 3 * parseInt(i / 3) + parseInt(j / 3);
            boxs[boxId].push(board[i][j]);
            // console.log(boxId);
        } 
        // console.log(cRow)
        if (!validRepeat(cRow)) {
            return false;
        }
    }
    // console.log(cRow)

    // 判斷九宮格內是否有重複的值    
    for (let k = 0; k < 9; k++) {
        if (!validRepeat(boxs[k])) {
            return false;
        }
    }


    return true;

    function validRepeat(array) {
        let map = [];
        for (let i = 0; i < 9; i++) {
            if (array[i] == ".") {
                continue;
            }
            if (map.indexOf(array[i]) == -1) {
                map.push(array[i]);
            } else {
                return false;
            }
        }
        return true;
    }
};
