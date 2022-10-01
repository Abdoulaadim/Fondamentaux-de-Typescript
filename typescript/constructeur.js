var Contacty = /** @class */ (function () {
    function Contacty(name, telephone) {
        this.name = name;
        this.telephone = telephone;
    }
    Contacty.prototype.affichagesContact = function () {
        console.log("name: " + this.name, " telephone: " + this.telephone);
    };
    return Contacty;
}());
//let contact : Contacty = new Contacty;
var contacty = new Contacty("Mabrouki", "04512321092");
contacty.affichagesContact();
