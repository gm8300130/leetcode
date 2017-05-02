/*
## 題目

Given two binary trees, write a function to check if they are equal or not.
Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

## 翻譯

給定兩個二元樹，判斷這兩個樹的每一個節點中的值與節點位置是否都相同
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // 都是空的
    if ( !p && !q ) {
        return true;
    }
    // p不存在q存在 或者 p存在q不存在
    if ( (!p && q) || (p && !q) ) {
        return false;
    }
    // val不相等
    if ( p.val !== q.val ) {
        return false;
    }
    //一直往下一層比較
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};