var Contactq = /** @class */ (function () {
    function Contactq(name, telephone) {
        this.name = name;
        this.telephone = telephone;
    }
    Contactq.prototype.getName = function () {
        return this.name;
    };
    Contactq.prototype.setName = function (value) {
        this.name = value;
    };
    Contactq.prototype.affichagesContact = function () {
        console.log("name: " + this.name);
    };
    return Contactq;
}());
//let contact : Contactq = new Contactq;
var contactq = new Contactq();
contactq.setName('Abdoulaadim Mabrouki');
contactq.affichagesContact();
