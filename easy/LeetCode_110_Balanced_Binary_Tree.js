/*
## 題目

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

## 翻譯

給一個二元樹，判斷這是不是一個高度平衡的樹。
在這個問題中，高度平衡樹的定義是一個樹兩個子樹每個node的level不能差超過1。

```
高度平衡樹
     1
   /   \
  2     5
 / \     \
3   4     6  
```

```
在節點5的時候，節點5左子樹level = 1，右子樹level = 3， 3-1 > 1 因此這是非高度平衡樹
     1
   /   \
  2     5
 / \     \
3   4     6  
           \
            7 

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
var isBalanced = function (root) {
    
	if (!root || (!root.right && !root.left)) {
		return true;
	}
	//找出深度
	let left = findepth(root.left);
	let right = findepth(root.right);
	//深度超過1, return false, 沒超過就繼續判斷
	return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);

	function findepth(root) {
		
		if (!root) { 
			return 0;
		}
		
		let left = findepth(root.left) + 1;
		let right = findepth(root.right) + 1;
		
		return Math.max(left, right);
	}
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {

	return dfs(root) != -1;

	function dfs(root) { 
		
		if (!root) { 
			return 0;
		}
		
		let left = dfs(root.left);
		if (left == -1) { 
			return -1;
		}

		let right = dfs(root.right);
		if (right == -1) {
			return -1;
		}
		
		if (Math.abs(left - right) > 1) {
			return -1;
		}

		return Math.max(left, right) + 1;
	}
};