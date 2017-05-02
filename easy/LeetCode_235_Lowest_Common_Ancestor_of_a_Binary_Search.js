/*
## 題目

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
```
        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
```
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

## 翻譯

給一個二元搜尋樹(BST)，再給兩個樹中的節點Node，找出這兩個Node的最低共同祖先節點，根據LCA在維基百科的定義: "最低共同祖先節點，是指在一個Tree T中的Node v, Node w存在一個最低層級共同的祖先T，同時 v與w也可以算是自己的祖先節點"
範例：以上面的樹來看，[2,8]的最低共同祖先節點為6。
[2,4]的最低共同祖先節點為2，因為2也算是自己的祖先節點


二元搜索樹的定義：
1.左子樹不為空，則左子樹的所有節點的鍵值(Key)小於根節點的鍵值。
2.右子樹不為空，則右子樹的所有節點的鍵值(Key)大於根節點的鍵值。
3.左右子樹也都是二元搜索樹。
4.節點不會有重複的鍵值。

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    
    while ( true ) {
        let value = root.val;

        if ( (p.val >= value && value >= q.val)
            || (p.val <= value && value <= q.val) ) {
            return root;
        }


        
        if ( p.val > value && q.val > value ) {
            root = root.right;
        } else {
            root = root.left;
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if ( !root ) { 
        return null;
    }
    let min = Math.min(p.val, q.val);
    let max = Math.max(p.val, q.val);

    while ( root.val < min || root.val > max ) {
        while ( root.val < min ) { 
            root = root.right;
        }
        while ( root.val > max ) {
            root = root.left;
        }
    }
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if ( root == p || root == q ) {
        return root;
    }
    
    if ( !root ) {
        return null;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if ( !left && !right ) {
        return null;
    } else if ( left && right ){ 
        return root;
    }
    return !left ? right : left;
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

    if ( root.val > p.val && root.val > q.val ) {
        return lowestCommonAncestor(root.left, p, q);
    } else if ( root.val < p.val && root.val < q.val ) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
}