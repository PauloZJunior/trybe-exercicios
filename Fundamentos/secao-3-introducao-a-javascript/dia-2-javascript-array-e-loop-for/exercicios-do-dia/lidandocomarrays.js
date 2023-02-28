//LIDANDO COM ARRAYS
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let odd = 0;
for (let count = 0; count < numbers.length; count ++) {
    console.log(numbers[count]);
    sum += numbers[count];

    if (count === 0) {
        higherNumber = numbers[count];
    }else if (higherNumber <= numbers[count]) {
        higherNumber = numbers[count];
    }

    if (numbers[count] % 2 !== 0){
        odd += 1;
    }

    if (count === 0) {
        smallNumber = numbers[count];
    }else if (smallNumber >= numbers[count]) {
        smallNumber = numbers[count];
    }
}  
let avarage = sum / numbers.length;

console.log("A soma de todos os numeros e: " + sum);
console.log("A media dos numeros e: " + avarage.toFixed(2)); 
console.log("O maior valor e: " + higherNumber);
console.log("O menor valor e: " + smallNumber);

if (avarage > 20) {
    console.log("Valor da media e MAIOR que 20!")
}else {
    console.log("Valor da media e MENOR ou igual a 20!");
} 
if (odd === 0) {
    console.log("Nenhum valor ímpar encontrado!");
}else {
    console.log("A quantidade de impares e: " + odd);
}

let num = [];
let div2;
for (let count = 0; count < 25; count ++) {
    num[count] = count + 1;
    div2 = num[count] / 2;
    console.log(num[count] + "/" + 2 + "=" + div2);
}
console.log(num);