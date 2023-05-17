function suma (a:number, b: number ): Promise <number>{
    return new Promise(function(resolve, reject){
        if(Number.isNaN(a) || Number.isNaN(b)){
            reject("no son numeros alguno de los parametros");
            return;
        }
        setTimeout(()=> resolve(a + b),1000);
    })
}



//se llama a la funcion que devuelve una promesa resuelta o no. 
let promesa = suma(15,35);
promesa.then((resultado)=>{
    console.log("El resultado es: ",resultado);
});
console.log("Aunque este codigo esta despues se imprime primero porque es Syncrono");