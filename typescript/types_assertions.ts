let something:String ="Abdoulaadim mabrouki"

let char = something.charAt(5);

console.log(char);


let somethingx;
somethingx ="Abdoulaadim mabrouki";
let charx = (somethingx as string).charAt(5);

console.log(charx);


let somethingxy;
somethingxy ="Abdoulaadim mabrouki";
let charxy = (<String> somethingxy).charAt(5);

console.log(charxy);


