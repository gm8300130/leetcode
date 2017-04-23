/*
## 題目

Find the total area covered by two rectilinear rectangles in a 2D plane.
Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

![](http://ww4.sinaimg.cn/large/006tKfTcgy1fewrdmxtdij30f808pdfw.jpg)

Assume that the total area is never beyond the maximum possible value of int.

## 翻譯

計算兩個長方形所覆蓋的面積，每個長方形都是由左下頂點與右上頂點決定，如圖所示。
假設覆蓋面積不會過int的最大值。

 */

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    //分別計算兩個面積
    let one = Math.abs(A - C) * Math.abs(B - D);
    let two = Math.abs(E - G) * Math.abs(F - H);

    let left = Math.max(A, E);
    let right = Math.min(C, G);
    let bottom = Math.max(B, F);
    let top = Math.min(D, H);
    let overlapping = 0;
    //有重疊的話
    if ( left < right && bottom < top) {
    	overlapping =  ( right - left ) * ( top - bottom );
    }
    return one + two - overlapping;
};