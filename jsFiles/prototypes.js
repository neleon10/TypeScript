const animal = {
    eat(){         // esto es lo mismo que esto: **eat: function(){ }**
        console.log("nyam nyam!");
    }
}

const rabbit = {
    jump(){
        console.log("Boing!");
    }
}
rabbit.__proto__ = animal;//herencia de prototipos
rabbit.eat();