function varTest() {
    var x = 1;
    var y = 5;
    if (true) {
        var x = 2;
        var y_1 = 6;
        console.log(x);
        console.log(y_1);
    }
    console.log(x);
    console.log(y);
}
function varTest2() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("afficher dernier element :", i);
}
varTest();
varTest2();
