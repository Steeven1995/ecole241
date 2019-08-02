var max=0;
for (let index = 0; index < 5; index++) {
    var nombre=prompt('Saisissez le nombre '+ index+1);
    if(nombre>max){
        max=nombre;
    }
}
console.log(max);