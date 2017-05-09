/*

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) {
        return [];
    }
    let list = [];
    
    find(root, '');
    
    return list;

    function find(node, str) {
        //當都找不子節點的時候存入陣列
        if (!node.left && !node.right) {
            list.push(str + node.val);
        } else {
            if (node.left) {
                find(node.left, str + node.val + '->');
            }
            if (node.right) {
                find(node.right, str + node.val + '->');
            }
        }    
    }
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (!root) {
        return [];
    }  
    if (!root.left && !root.right) {
        return [String(root.val)];
    }
    
    let list = binaryTreePaths(root.left)
            .concat(binaryTreePaths(root.right));
    return list.map(path => `${root.val}->${path}`);
}