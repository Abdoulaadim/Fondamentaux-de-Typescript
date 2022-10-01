var Contactsxw = /** @class */ (function () {
    //camelcase
    function Contactsxw(_name, _telephone) {
        this._name = _name;
        this._telephone = _telephone;
    }
    Object.defineProperty(Contactsxw.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Contactsxw.prototype.affichagesContact = function () {
        console.log("name: " + this._name);
    };
    return Contactsxw;
}());
//let contact : Contactsxw = new Contactsxw;
var contactsxw = new Contactsxw();
contactsxw.name = 'Abdoulaadim Mabrouki';
contactsxw.affichagesContact();
