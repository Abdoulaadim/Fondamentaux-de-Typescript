var Contactx = /** @class */ (function () {
    function Contactx() {
    }
    Contactx.prototype.createContactx = function (contact) {
    };
    Contactx.prototype.updateContactx = function (contact) {
    };
    Contactx.prototype.deleteContactx = function (contact) {
    };
    Contactx.prototype.affichagesContact = function () {
        console.log("name: " + this.name, " telephone: " + this.telephone);
    };
    return Contactx;
}());
//let contact : Contactx = new Contactx;
var contact = new Contactx;
contact.name = "Mabrouki";
contact.telephone = "04512321092";
contact.affichagesContact();
// createContactx({
//     name: "abdouladim",
//     telephone : "0658303921"
// })
