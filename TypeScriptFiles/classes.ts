class Animal {
    weight : number;
    constructor(weight:number){
        this.weight = weight;
    }
    gruñe(){
        console.log("GRRR");
    }
}



class Person extends Animal{
    name:string;
    age:number;

    constructor(name:string,age:number,weight:number){
        //llamar como primera instancia al super contructor
        super(weight);//constructor de animal
        this.name=name;
        this.age=age
    }

}

let persona = new Person("Cacho",55,88);
persona.gruñe();