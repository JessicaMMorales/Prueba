let pares=0, impares=0; 

for(let i = 0; i <= 100; i++){ 
    if(i % 2 == 0){ 
        pares = pares + i; 
    }else{ 
        impares = impares + i; 
    } 
} 
console.log("La suma de números pares es: ", pares);
console.log("La suma de números impares es: ", impares);