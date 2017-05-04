/*
## 題目

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example: 

Given binary tree [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
return its bottom-up level order traversal as:
```
[
  [15,7],
  [9,20],
  [3]
]
```

## 翻譯

給一個二元樹，每一個階層從左到右裝成一個list，再從下到上放到一個大list裡面。
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
var levelOrderBottom = function(root) {
    
    if ( !root ) { 
        return [];
    }

    let stack = [{level: 0, node: root}];
    let result = [];
    
    while ( stack.length ) {
        let last_node = stack.pop();
        if ( !result[last_node.level] ) {
            result[last_node.level] = [];
        }
        
        result[last_node.level].push(last_node.node.val);
        
        if ( last_node.node.right ) {
            stack.push( {level: last_node.level + 1, node: last_node.node.right} );
        }

        if ( last_node.node.left ) {
            stack.push( {level: last_node.level + 1, node: last_node.node.left} );
        }
    }
    return result.reverse();
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    
    if ( !root ) {
        return [];
    }

    let map = {};
    let result = [];

    // 先執行根節點
    add(0, root);
    // 把map 整理進陣列
    for ( let i in map ) {
        result.push(map[i]);
    }    
    return result;
    //傳入階層與結點
    function add(level, root)
    {
        if (!root) { 
            return;
        }
        //沒寫入過, 就建立
        if ( !map[level] ) {
            map[level] =  [root.val];
        } else {
            map[level].push(root.val);
        }
        //處理左邊子節點, 在處理右邊
        add(level + 1, root.left);
        add(level + 1, root.right);
    }
};