/*
## 題目

Invert a binary tree.
```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```
to
```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

Trivia:
This problem was inspired by this original tweet by Max Howell:
>Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.


## 翻譯
反轉一個二元樹。

這靈感來至於 Max Howell,
Google 有90%使用你的軟件, 但你無法反轉二元樹

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //空的或是 left right 都沒存在就直接return
    if ( !root || (!root.left && !root.right) ) {
        return root;
    }
    //先把左邊記錄下來, 左右互換
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp); 
    return root;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {

    if ( !root ) {
        return root;
    }

    [root.left, root.right] = [ invertTree(root.right), invertTree(root.left) ]; 
    return root;
};