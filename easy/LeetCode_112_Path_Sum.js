/**
## 題目

Given a binary tree and a sum,
determine if the tree has a root-to-leaf
path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
```
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

## 翻譯

給一個二元樹與另外一個數字sum，判斷二元樹從根加到葉是否有一個路徑可以得到一個與sum相同的數字。
範例：
例如上面的樹，sum = 22，可以找到 5 + 4 + 11 + 2 = 22，因此return true。

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) {
        return false;
    }

    return sumCalculation(root, 0);

    function sumCalculation(node, total) {
        //走到底時判斷是否與sum相同
        if (!node.left && !node.right) {
            total += node.val;
            return total == sum;
        }
        // 左邊還沒到底, 繼續計算左邊的總和
        if (node.left && !node.right) {
            return sumCalculation(node.left, total + node.val);
        }
        // 右邊還沒到底, 繼續計算右邊的總和
        if (!node.left && node.right) {
            return sumCalculation(node.right, total + node.val);
        }
        // 兩邊都還沒到底繼續算總和，只要一條成立就是true
        return sumCalculation(node.left, total + node.val) || sumCalculation(node.right, total + node.val);
    }
};


/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {

    if (!root) {
        return false;
    }
    const newSum = sum - root.val;

    // 都沒有子節點的時候，看是不是零
    if (!root.left && !root.right) {
        return newSum === 0;
    }

    return hasPathSum(root.left, newSum)
        || hasPathSum(root.right, newSum);
};