//Solamente los metodos de una clase pueden acceder a las caracteristicas del objeto.

class Watch{
    private hour: number;
    private minute: number;
    private second: number;
    constructor(hour: number,minute: number,second: number){
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
}
let reloj = new Watch(12,15,55);
//console.log(reloj.hour); --> esto da error porque necesito un metodo para acceder a la propiedad. 
