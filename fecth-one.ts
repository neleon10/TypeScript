//fetch devuelve un Response, se puede usar cualquier nombre como parametro
//Lo ideal es que sea res, o response. 
fetch(`https://randomuser.me/api`)
.then(response => response.json())
.then(data => console.log(data.results[0].name))
.catch((err)=>console.error("He cazado el error",err))