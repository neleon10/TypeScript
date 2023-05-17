class Watch{
    #hour: number;
    #minute: number;
     #second: number;
    constructor(hour: number,minute: number,second: number){
        this.#hour = hour;
        this.#minute = minute;
        this.#second = second;
    }
}
let reloj = new Watch(12,15,55);
//console.log(reloj.hour); --> esto da error porque necesito un metodo para acceder a la propiedad. 
//se necesitan Getters and Setters para acceder a esas propiedades. 
// # es mas de JS y el Private de TS.
