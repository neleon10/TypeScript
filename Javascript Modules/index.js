
//si usamos en el package el "type: module" --> ya no necesitamos la extension MJS en los archivos. 
// el EXPORT respeta el nombre si o si de la funcion
// El export default no necesariamente, son canales separados. 
import funcioncita, { area,circumference } from "./circle.mjs"; //ya no usa el require
import * as path from "path"; //Aqui importo todo
console.log(area(5.0));
console.log(funcioncita());


