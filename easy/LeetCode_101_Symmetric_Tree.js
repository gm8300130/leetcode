/*
## 題目

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).


For example, 

this binary tree [1,2,2,3,4,4,3] is symmetric: 

```
     1
   /   \
  2     2
 / \   / \
3   4 4   3  
```

But the following [1,2,2,null,3,null,3] is not:

```
     1
   /   \
  2     2
   \     \
    3     3
```

## 翻譯
給一個二元樹，判斷他是不是鏡像樹(從root為中心，左邊跟右邊為鏡像)。

範例：

[1,2,2,3,4,4,3]是鏡像樹
```
     1
   /   \
  2     2
 / \   / \
3   4 4   3  
```

[1,2,2,null,3,null,3]就不是鏡像樹

```
     1
   /   \
  2     2
   \     \
    3     3
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    
    if ( !root ) { 
        return true;
    }
    // 把右邊反轉
    root.right = revertTree(root.right);
    // 再比較有沒有一樣
    return isSameTree(root.left, root.right);
    
    //反轉Tree
    function revertTree(root) {1
        if (!root) {
            return root;
        }
        [root.left, root.right] = [revertTree(root.right), revertTree(root.left)];
        return root;
    }
    // 比較是否相同
    function isSameTree(root, revertTree) {
        if (!root && !revertTree) {
            return true
        }
        if ((!root && revertTree) || (root && !revertTree)) {
            return false;
        }
        if (root.val != revertTree.val) { 
            return false;
        }
        return isSameTree(root.left, revertTree.left) && isSameTree(root.right, revertTree.right);
    }
}