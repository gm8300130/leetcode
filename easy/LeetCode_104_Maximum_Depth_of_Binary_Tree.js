/*
## 題目

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## 翻譯

給一個二元樹，找出它的深度

最大深度是從根節點, 到最遠點的最長距離數

```
Tree,  depth = 3

        A
      /   \
    B       C
          /   \
        D       E

```

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
 * @return {number}
 */
var maxDepth = function (root) {

    return find(root);

    function find(node) {
        if ( !node ) { 
            return 0;
        }
        let left = 1;
        let right = 1;
        if ( node.left ) {
            left += find(node.left);
        }
        if ( node.right ) {
            right += find(node.right);
        }
        return Math.max(left, right);
    }
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    
    if ( !root ) {
        return 0;
    }
    let left = maxDepth(root.left) + 1;
    let right = maxDepth(root.right) + 1;

    return Math.max(left, right);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {

    if ( !root ) {
        return 0;
    }
    return 1 + Math.max( maxDepth(root.left), maxDepth(root.right) );
};