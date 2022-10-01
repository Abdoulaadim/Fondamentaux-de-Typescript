class Contactyxw {


 

    
    constructor(private name? : string, private telephone ?: string){
      

    }
    
 
    getName(){
        return this.name;
    }

    affichagesContact(){
        console.log("name: "+this.name,  " telephone: "+this.telephone);
        
    }
}


//let contact : Contactyxw = new Contactyxw;
let contactyxw  = new Contactyxw();

 


contactyxw.affichagesContact();