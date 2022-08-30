export default {
    toggleClass: function (obj, cName) {
        if (this.checkClassName(obj, cName)) {
            this.removeClassName(obj, cName);
        } else {
            this.addClass(obj, cName);
        }
    },
    addClass: function (obj, cName) {
        if (!this.checkClassName(obj, cName)) {
            obj.className += " " + cName;
        }
    },
    checkClassName: function (obj, cName) {
        var reg = new RegExp("\\b" + cName + "\\b");
        return reg.test(obj.className);
    },
    removeClassName: function (obj, cName) {
        var reg = new RegExp("\\b" + cName + "\\b");
        obj.className = obj.className.replace(reg, " ");
    }
}