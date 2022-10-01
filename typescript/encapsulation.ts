//Access modifiers
class Contactyx {

    private    name: string;
    private    telephone: string;

 

      // des argument optiennel
        constructor(name? : string, telephone ?: string){
        this.name=name;
        this.telephone=telephone;

    }
    
    //acceder un attribut private
    //la porté est automatiquement public
    getName(){
        return this.name;
    }

    affichagesContact(){
        console.log("name: "+this.name,  " telephone: "+this.telephone);
        
    }
}


//let contact : Contactyx = new Contactyx;
let contactyx  = new Contactyx();

 


contactyx.affichagesContact();