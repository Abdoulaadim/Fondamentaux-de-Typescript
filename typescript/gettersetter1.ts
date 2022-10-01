class Contactsx {


 

    
    constructor(private name? : string, private telephone ?: string){
      

    }
    
 
    get Name(){
        return this.name;
    }


    set Name(value){
        this.name = value;
    }

    affichagesContact(){
        console.log("name: "+this.name);
        
    }
}


//let contact : Contactsx = new Contactsx;
let contactsx  = new Contactsx();

contactsx.Name = 'Abdoulaadim Mabrouki' ;

contactsx.affichagesContact();