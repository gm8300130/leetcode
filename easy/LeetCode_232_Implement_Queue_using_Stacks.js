/*

## 題目

Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Notes:
You must use only standard operations of a stack -- which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

## 翻譯

用stacks來實做queue。
push(x) -- 將一個元素x放入queue最後
pop() -- 移除queue最前面的元素
peek() -- 取得queue最前面的元素(不刪除)
empty() -- 檢查queue是否是空的

注意：
你只能用標準的stack方法操作，這表示只有push到stack頂端， peek/pop stack頂端的元素， size， isEmpty這些方法是可以用的。
有些語言可能沒有支援stack，你可以使用類似的結構，例如list或deque, 只要你的操作符合上述的標準stack方法。可以假設全部的操作都是合法的(例如說當queue是empty的時候，不會執行pop這樣的操作)。

*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = [];
};

// 自己在array 裡面加上stack的size方法
Array.prototype.size = function () {
    return this.length;
};


/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * queue的pop()是拿出最底下一筆，stack的pop()是拿出最上面一筆
 * 因此stack不斷的pop()值到最後一筆才是我們要的資料
 * 使用另外一個stack來保存之前拿出的資料，取出之後將keep裡面的資料倒回我們的queue
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let keep = []; // 儲存從stack拿出來的資料
    let element; // 要回傳的資料

    // 從stack 不斷到資料到keep, 一直到最後一筆
    while (this.stack.size() > 1) {
        keep.push(this.stack.pop());
    }

    element = this.stack.pop();
    // 把keep的資料倒回stack
    while (keep.size() > 0) {
        this.stack.push(keep.pop());
    }

    return element;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let keep = []; // 儲存從stack拿出來的資料
    let element; // 要回傳的資料

    // 從stack 不斷到資料到keep, 一直到最後一筆
    while (this.stack.size() > 1) {
        keep.push(this.stack.pop());
    }

    element = this.stack.pop();
    // 跟pop不同的是，最後一筆要回到stack中
    keep.push(element);

    // 把keep的資料倒回stack
    while (keep.size() > 0) {
        this.stack.push(keep.pop());
    }

    return element;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.size() == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */