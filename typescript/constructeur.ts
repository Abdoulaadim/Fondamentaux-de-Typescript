class Contacty {

    name: string;
    telephone: string;

    constructor(name: string, telephone: string){
        this.name=name;
        this.telephone=telephone;

    }


    //   // des argument optiennel
    //     constructor(name? : string, telephone ?: string){
    //     this.name=name;
    //     this.telephone=telephone;

    // }

    affichagesContact(){
        console.log("name: "+this.name,  " telephone: "+this.telephone);
        
    }
}


//let contact : Contacty = new Contacty;
let contacty  = new Contacty("Mabrouki","04512321092");
 


contacty.affichagesContact();