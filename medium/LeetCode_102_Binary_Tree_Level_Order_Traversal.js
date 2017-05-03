/*
## 題目

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

## 翻譯

給一個二元樹，每一個階層從左到右裝成一個列陣，再依序放到一個大的列陣裡面。


BFS:
http://www.csie.ntnu.edu.tw/~u91029/Graph.html

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
 * @return {number[][]}
 */
var levelOrder = function (root) {

    if (!root) { 
        return [];
    }
    //建立stack 先把第一層放進去
    let stack = [{level: 0, node:root}];
    let result = [];
    //一直有的話就一直跑
    while ( stack.length ) { 
        //取出最後一組
        let last_node = stack.pop();
        //二維陣列要先宣告
        if ( !result[last_node.level] ) {
            result[last_node.level] = [];
        }
        //把每一階的val塞進去
        result[last_node.level].push(last_node.node.val);
        //right 要先放進去, 這樣取出來放進陣列的時候才會是左邊先放
        if ( last_node.node.right ) {
            stack.push({level: last_node.level + 1, node: last_node.node.right});
        }
        if ( last_node.node.left ) {
            stack.push({level: last_node.level + 1, node: last_node.node.left});
        }
    }
    return result;
};