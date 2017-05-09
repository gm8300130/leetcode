/*
## 題目

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest `leaf` node.

## 翻譯
給定的二元樹，找到其最小深度。

最小深度是沿著從最近的葉節點到根節點的最短路徑的節點的數目。

葉節點 ： 這題如果有左節點但沒右節點要算到右節點的子節點(null 要+1)，反之亦然
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
var minDepth = function (root) {
    if (!root) {
        return 0;
    }

    if (!root.left && !root.right) { 
        return 1;
    }
    // 不能寫0 要幫他指定成為 int 最大安全數值
    let min = Number.MAX_SAFE_INTEGER;

    find(root, 1);

    return min;

    function find(node, deep) {
        if (!node) {
            return;
        }

        if (!node.left && !node.right) {
            // 判斷從root到目前這個left的路徑是否比目前的min還小
            min = deep < min ? deep : min;
            return;
        }
        find(node.left, deep + 1);   
        find(node.right, deep + 1);   
    }    
};