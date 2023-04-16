// en principio interface sirve para lo mismo que el Object Type.

interface Cerveza  {
    name:string;
    grado:number;
    origin:string;
    readonly weight: number; // no se puede modificar este campo, solo se da en TS. 
}
let cerv : Cerveza = {
    name:"Budweiser",
    grado:18,
    origin:"Alemania",
    weight:500
}

console.log(cerv);