class Contactx {

    name: string;
    telephone: string;

    createContactx(contact: Contactx){
  
    }
    
    updateContactx(contact: Contactx) {
      
    }
    
    deleteContactx(contact: Contactx) {
      
    }

    affichagesContact(){
        console.log("name: "+this.name,  " telephone: "+this.telephone);
        
    }
}


//let contact : Contactx = new Contactx;
let contact  = new Contactx;
 

contact.name ="Mabrouki";
contact.telephone = "04512321092";

contact.affichagesContact();



// createContactx({
//     name: "abdouladim",
//     telephone : "0658303921"
// })