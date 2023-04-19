function Person(name, age){
    this.name = name;
    this.age = age;
}
//agrego un metodo al prototipo persona. 
Person.prototype.saludar = function(){
    return `Hola mi nombre es ${this.name}`;
}

let persona = new Person ("Juan El Bautista", 55);
persona.hobby = "Esgrima";
console.log(persona)

console.log(persona.saludar())