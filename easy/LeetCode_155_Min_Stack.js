/*
## 題目

esign a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

Example:
```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
```

## 翻譯

設計一個支援 push, pop, top 以及在常數時間找出最小值的方法getMin, 也就是說getMin這個方法的時間複雜度為O(1)。+

push(x) -- 將元素x加入stack上面 pop() -- 移除stack最上面的元素 top() -- 取得stack最上面的元素(不移除) getMin() -- 取得stack裡面最小的元素(不移除)
*/



/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.super = (method, arg) => Array.prototype[method].call(this, arg);
    this.min = [];
    this.getMin = () => this.min.length ? this.min[this.min.length - 1] : Infinity;
};

MinStack.prototype = Object.create(Array.prototype);

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (this.min.length === 0 || this.getMin() >= x) {
        this.min.push(x);
    }
    return this.super('push', x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.min.length && this.top() === this.getMin()) {
        this.min.pop();
    }
    return this.super('pop');
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.length === 0) {
        return undefined;
    }
    return this[this.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */