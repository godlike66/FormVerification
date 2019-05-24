//替换所有字符
function replaceALLStr(str, key, value) {
    var re = new RegExp(key, "g");
    return str.replace(re, value);
}
//是否GUID
function isGUID(value) {
    var reg = /^\w{8}-(\w{4}-){3}\w{12}$/;
    return reg.test(value);
}
//是否整数
function isInteger(value) {
    if (value == undefined || value == null || value == "")
        return false;
    return value ? (value.toString().match(/^\d+$/) ? true : false) : false;
}
//是否数字
function isNumber(value) {
    if (value == undefined || value == null || value == "")
        return false;
    return value ? (value.toString().match(/^[+-]?\d+(\.\d+)?$|^$|^(\d+|\-){7,}$/) ? true : false) : false;
}
//是否邮箱
function isEmail(value) {
    var p = /^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$/;
    return p.test(value);
}