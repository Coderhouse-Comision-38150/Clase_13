/* Linea que crear colores en Hexa */
var getNum0a255 = function () { return Math.floor(Math.random() * 256); };
/* Definimos la clase color */
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.get = function () {
        var color = "rgb(".concat(getNum0a255(), ",").concat(getNum0a255(), ",").concat(getNum0a255(), ")");
        return color;
    };
    return Color;
}());
var color = new Color();
console.log(color.get());
