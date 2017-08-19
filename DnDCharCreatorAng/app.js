var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();
var inputFields = (function () {
    function inputFields(element) {
        this.label.innerHTML = "Please enter the name of you Hero: ";
        this.textArea = document.createElement('textArea');
        this.label.appendChild(this.textArea);
    }
    inputFields.prototype.start = function () {
    };
    inputFields.prototype.getTextAreaText = function (x) {
        return x;
    };
    return inputFields;
})();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var tA = document.getElementById('textArea');
    var nameOfHero = new inputFields(tA);
    nameOfHero.start();
};
//# sourceMappingURL=app.js.map