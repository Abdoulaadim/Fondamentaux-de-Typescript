class Contactsxw {


 //camelcase

    
    constructor(private _name? : string, private _telephone ?: string){
      

    }
    
 
    get name(){
        return this._name;
    }


    set name(value){
        this._name = value;
    }

    affichagesContact(){
        console.log("name: "+this._name);
        
    }
}


//let contact : Contactsxw = new Contactsxw;
let contactsxw  = new Contactsxw();

contactsxw.name = 'Abdoulaadim Mabrouki' ;

contactsxw.affichagesContact();