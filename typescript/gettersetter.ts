class Contactq {


 

    
    constructor(private name? : string, private telephone ?: string){
      

    }
    
 
    getName(){
        return this.name;
    }


    setName(value){
        this.name = value;
    }

    affichagesContact(){
        console.log("name: "+this.name);
        
    }
}


//let contact : Contactq = new Contactq;
let contactq  = new Contactq();

contactq.setName('Abdoulaadim Mabrouki');

contactq.affichagesContact();