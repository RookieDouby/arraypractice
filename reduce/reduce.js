var arr = [1,2,3,4,5];

var sum = arr.reduce(function(pre,next,index,arr) {
    return pre + next;
},10);

console.log(sum);

//数组扁平化
function flatten(arr) {
    return arr.reduce(function(pre,next) {
        return pre.concat(next);
    });
}

console.log(flatten([[0,1],[2,3],[4,5]]));

// 数组元素连成字符串（纯数字或者字符串用join(),对象用reduce）
var arr1 = [{name:'sam',id:'samid'},{name:'sijin',id:'sijinid'},{name:'judice',id:'judiceid'}];
function stringify(arr) {
    return arr.reduce(function(pre,cur,index,arr) {
        if(index === 0) {
            return cur.name;
        } else if(index === arr.length - 1) {
            return pre + '&' + cur.name
        } else {
            return pre + ',' + cur.name
        }
    },'');
}
function getPersonId(arr) {
    return arr.reduce(function(pre,cur,index,arr) {
        return pre + (cur.id === 'judiceid'?cur.name:'');
    },'');
}
console.log(stringify(arr1));
console.log(getPersonId(arr1));

//求最大值----------------------------------------
var arr2 = [1,3,2,5,2,3,4];
function maxNum(arr) {
    return arr.reduce(function(pre,cur,index,arr) {
        return pre > cur?pre:cur;
    });
}
console.log(maxNum(arr2));
