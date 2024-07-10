/*Imprimir pares del 1 al 30*/

for (var i = 1; i<=30; i++){
    if (i%2 == 0)
        console.log(i);
}

/*Imprimir múltiplos de 4 en orden descendente*/

for (var i = 100; i>=0; i--){
    if (i%4 == 0)
        console.log(i)
}

/*Imprime la secuencia*/

for (var i = 10; i>=-5; i-=3){
    console.log(i)
}

/*Suma todos los números pares del 1 al 50*/

var sum = 0;
for (var i = 2; i <= 50; i += 2){
    sum += i;
}
console.log(sum)

/*Factorial*/

var mul = 1;
for(var i = 1; i <= 20; i++){
    mul *= i;
}
console.log(mul);