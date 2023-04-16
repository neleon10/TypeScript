type pos2D = { x: number; y: number; age?: number }; //esto es un object type (age es opcional)

let object: pos2D = {
  x: 0,
  y: 5,
};
object.age = 54;

let object2 = {
  a: 2,
  b: "hi",
};

console.log(object);
