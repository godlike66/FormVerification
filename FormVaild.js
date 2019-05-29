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

/*JQuery 限制文本框只能输入数字*/
$.fn.numeral = function () {
    $(this).keyup(function () {
        $(this).val($(this).val().replace(/[^\d]/g, ''));
    }).bind("paste", function () {  //CTR+V事件处理      
        $(this).val($(this).val().replace(/[^\d]/g, ''));
    }).css("ime-mode", "disabled"); //CSS设置输入法不可用      
}
/*JQuery 限制文本框只能输入数字和小数点*/
$.fn.numedot = function () {
    $(this).bind("keypress", function (e) {
        var code = (e.keyCode ? e.keyCode : e.which); //兼容火狐 IE 
        if (!$.support && (e.keyCode == 0x8)) { //火狐下不能使用退格键 
            return;
        }
        var nubmer = $(this).val();
        if (code == 45 && nubmer.indexOf("-") == -1) {
            return;
        }
        if (code == 46 && nubmer.indexOf(".") == -1) {
            return;
        }
        return code >= 48 && code <= 57
    }).bind("keyup", function (e) {  //CTR+V事件处理 

    }).bind("paste", function (e) {  //CTR+V事件处理    
        return false;
    }).bind("blur", function () {
        var nubmer = $(this).val();
        if (isNaN(nubmer)) {
            $(this).val('');
        }
    }).css("ime-mode", "disabled"); //CSS设置输入法不可用      
}