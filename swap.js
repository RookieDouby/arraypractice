/**
 * Created by zhanghongdouon 16/11/16.
 * 不用中间临时变量,交换两个变量的值
 */

function swap(a,b) {
    b = b - a;
    a = a + b;
    b = a-b;
}
