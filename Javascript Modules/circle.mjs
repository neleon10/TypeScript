// hay dos formas de exportar, poner el export delante de la funcion.
//ejemplo: export const area = (r)=> Math.PI * r * r;
// o armar un objeto
const area = (r)=> Math.PI * r * r;
const circumference = (r)=> 2 * Math.PI * r

export {
    area,
    circumference
}