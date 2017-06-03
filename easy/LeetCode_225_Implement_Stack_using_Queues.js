/*
## 題目

Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.

Notes:
You must use only standard operations of a queue -- which means only `push to back`, `peek/pop from front`, `size`, and `is empty` operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).

## 翻譯

使用queue來實做 stack。
push(x) -- 將一個元素x放入queue最後面
pop() -- 移除stack最上面的元素
peek() -- 取得stack最上面的元素(不刪除)
empty() -- 檢查stack是否是空的
注意：
你只能用標準的queue方法操作，這表示只有push到queue後端，peek/pop queueu前端的元素，size以及sEmpty這些方法是可以用的。
有些語言可能沒有支援queue，你可以使用類似的結構，例如list或deque, 只要你的操作符合上述的標準queue方法。可以假設全部的操作都是合法的(例如說當stack是empty的時候，不會執行pop這樣的操作)。
*/
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.stack = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let len = this.stack.length;
    for (let i = 1; i < len; i++) {
        let n = this.stack.shift();
        this.stack.push(n);
    }
    return this.stack.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    let len = this.stack.length - 1;
    return this.stack[len];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.stack.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
