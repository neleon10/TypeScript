function suma (a:number, b: number, callback:(result:number)=> void){
    setTimeout(()=> callback(a+b),3000);
}


//esta funcion se llama luego
function callback(r:number){
    console.log("Esto se ejecuta luego, es callback",r);
}

console.log("Esto se ejecuta primero");
console.log(suma(10,20,callback));
console.log("Esto se ejecuta segundo aunque este tercero en la pila de llamados");