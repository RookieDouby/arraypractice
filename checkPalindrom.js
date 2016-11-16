/**
 * Created by zhanghongdou on 16/11/15.
 */
function checkPalinDrom(str) {
    return str == str.split(' ').reverse().join(' ');
}

console.log(checkPalinDrom('Sam hello nick'));