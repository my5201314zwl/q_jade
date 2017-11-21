"use strict";
var ValidateConst = (function () {
    function ValidateConst() {
    }
    /**
     * 校验是否为有效id地址
     * @param ip_addr 目标id地址
     * @returns {boolean}
     */
    ValidateConst.prototype.valid_ip = function (ip) {
        if (ip == null || ip == "") {
            return true;
        }
        var re = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        return ip.match(re) != null;
    };
    /**
     * 校验是否为有效url
     * @param str_url 目标url
     * @returns {boolean}
     */
    ValidateConst.prototype.valid_url = function (str_url) {
        var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
            + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
            + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
            + "|" // 允许IP和DOMAIN（域名）
            + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
            + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
            + "[a-z]{2,6})" // first level domain- .com or .museum
            + "(:[0-9]{1,4})?" // 端口- :80
            + "((/?)|" // a slash isn't required if there is no file name
            + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
        var re = new RegExp(strRegex);
        return re.test(str_url);
    };
    /**
     * 校验是否为有效mac地址
     * @param mac 目标mac地址
     * @returns {boolean}
     */
    ValidateConst.prototype.valid_mac = function (mac) {
        if (mac == null || mac == "") {
            return true;
        }
        var regex = /[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}/;
        return regex.test(mac) != null;
    };
    /**
     * 校验是否为有效电话号码
     * @param telephone 目标电话号码
     * @returns {boolean}
     */
    ValidateConst.prototype.valid_phone = function (telephone) {
        if (telephone == "" || telephone == null) {
            return true;
        }
        var reg = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$)/g;
        return reg.test(telephone);
    };
    /**
     * 校验是否为有效手机号码
     * @param num 目标手机号码
     * @returns {boolean}
     */
    ValidateConst.prototype.valid_telephone = function (num) {
        if (num == "" || num == null) {
            return true;
        }
        var reg = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/g;
        return reg.test(num);
    };
    /**
     * 校验是否为有效帐号
     * @param htcode 目标帐号
     * @returns {boolean}
     */
    ValidateConst.prototype.valid_htcode = function (htcode) {
        var reg = /^[a-z0-9_]{6,20}$/;
        return reg.test(htcode);
    };
    /**
     * 校验是否为有效车牌号
     * @param plate_number 目标车牌号
     * @returns {boolean}
     */
    ValidateConst.prototype.valid_plate_number = function (plate_number) {
        if (plate_number == "" || plate_number == null) {
            return true;
        }
        var rule1 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z](?![A-HJ-NP-Z]{5})[A-HJ-NP-Z\d]{5}$/;
        var rule2 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z](?![A-HJ-NP-Z]{4})[A-HJ-NP-Z\d]{4}学$/;
        var rule3 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z](?![A-HJ-NP-Z]{4})[A-HJ-NP-Z\d]{4}警$/;
        var rule4 = /^[A-Z]{2}(?![A-HJ-NP-Z]{5})[A-HJ-NP-Z\d]{5}$/;
        var rule5 = /^WJ[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{0,1}\d{4}[A-H_J-NP-Z\d]$/; //ok
        var rule6 = /^粤[A-HJ-NP-Z\d][A-HJ-NP-Z\d]{4}港|澳$/;
        var rule7 = /^\d{6}使$/;
        var rule8 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z](?![A-HJ-NP-Z]{4})[A-HJ-NP-Z\d]{4}领$/;
        var rule9 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z](?![A-HJ-NP-Z]{4})[A-HJ-NP-Z\d]{4}挂$/;
        var rule10 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z][D|F][A-HJ-NP-Z\d]\d{4}$/;
        var rule11 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼][A-Z]\d{5}[D|F]$/;
        var str = plate_number.toUpperCase();
        return rule1.test(str) || rule2.test(str) || rule3.test(str) || rule4.test(str) || rule5.test(str) || rule6.test(str) || rule7.test(str) || rule8.test(str) || rule9.test(str) || rule10.test(str) || rule11.test(str);
    };
    return ValidateConst;
}());
exports.ValidateHelper = new ValidateConst();
//# sourceMappingURL=validate-helper.js.map