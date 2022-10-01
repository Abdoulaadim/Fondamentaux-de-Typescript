var Contactsx = /** @class */ (function () {
    function Contactsx(name, telephone) {
        this.name = name;
        this.telephone = telephone;
    }
    Object.defineProperty(Contactsx.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Contactsx.prototype.affichagesContact = function () {
        console.log("name: " + this.name);
    };
    return Contactsx;
}());
//let contact : Contactsx = new Contactsx;
var contactsx = new Contactsx();
contactsx.Name = 'Abdoulaadim Mabrouki';
contactsx.affichagesContact();
