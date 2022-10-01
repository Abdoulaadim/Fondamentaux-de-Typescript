function varTest(){
    var x=1; // variable  globale
    let y =5; // variable locale

    if(true){
        var x =2;
        let y =6;
        console.log(x);
        console.log(y);
        
    }
    console.log(x);
    console.log(y);
}


function varTest2(){

  for (var i = 0; i < 5; i++) {
      console.log(i);
      
  }
  console.log("afficher dernier element :",i)
}

varTest();
varTest2();