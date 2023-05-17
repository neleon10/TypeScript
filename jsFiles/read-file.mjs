import fs from "fs";
//esto es una funcion asyncrona autentica
fs.readFile("read-file.mjs",(err,data)=>{
    console.log("ya tengo data-->",data)
})

console.log("Final, esto termina primero porque no es asyncrono!!!.");
