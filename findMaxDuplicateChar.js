/**
 * Created by zhanghongdou on 16/11/15.
 * 找到字符串里出现最多的一个字符
 */

function findMaxDuplicateChar(str) {
    if (str.length === 1)  {
        return str;
    }
    let charObj = {};
    for (let i = 0, len = str.length; i < len; i++) {
        //如果该字符不在charObj中,则以该字符为key创建一个value为1.若在charObj中,则value + 1
        if(!charObj[str.charAt(i)]) {
            charObj[str.charAt(i)] = 1;
        } else {
            charObj[str.charAt(i)] += 1;
        }
    }

    let maxChar = '',
        maxValue = 1;
    //遍历charObj
    for(let k in charObj) {
        if(charObj[k] >= maxValue) {
            maxChar = k;
            maxValue = charObj[k];
        }
    }

    return maxChar;
}

console.log(findMaxDuplicateChar("dadadajajkdajkfasaahfajhfiqhwu"));
