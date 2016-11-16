/**
 * Created by zhanghongdou on 16/11/16.
 */
function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    let leftArr = [];
    let rightArr = [];
    let flag = arr[0];

    for(let i = 0, len = arr.length;i < len; i++) {
        if(arr[i] > flag) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }

    return [].concat(quickSort(leftArr),[flag],quickSort(rightArr))
}

console.log(quickSort([21,13,2]));
