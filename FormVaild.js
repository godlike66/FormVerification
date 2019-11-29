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
//限制文本框只能输入正整数
function numInteger(val) {
    if (val.length == 1) {
        val = val.replace(/[^1-9]/g, '');
    } else {
        val = val.replace(/\D/g, '');
    }
    return val;
}
//限制文本框只能输入整数或小数点且只保留2位小数
function numDecimal(val) {
    val = val.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符   
    val = val.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的   
    val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    val = val.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能输入两个小数   
    if (val.indexOf(".") < 0 && val != "") {
        val = parseFloat(val);
    }
    return val;
}