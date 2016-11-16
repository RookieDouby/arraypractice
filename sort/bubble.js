//冒泡排序
function bubbleSort(arr) {
    var len = arr.length;
    var temp;
    for(var i = 0; i < len; i++) {
        for(var j = 0; j < len - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

var arr = [2,1,4,4,5,2,3,4,6,1];
console.log(bubbleSort(arr));//[ 1, 1, 2, 2, 3, 4, 4, 4, 5, 6 ]
