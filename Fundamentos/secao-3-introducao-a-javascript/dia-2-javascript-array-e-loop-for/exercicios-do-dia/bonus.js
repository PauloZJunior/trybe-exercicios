// Ordem crescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let copyNumbers = numbers.slice();
const lineStyle = "============================================"
for (let index = 0; index < numbers.length; index += 1) {
    for (let indexCompare = 0; indexCompare < numbers.length - index; indexCompare += 1) {
        if (numbers[indexCompare] > numbers[indexCompare + 1]) {
            let bigger = numbers[indexCompare];
            numbers[indexCompare] = numbers[indexCompare + 1];
            numbers[indexCompare + 1] = bigger;   
        }
    }    
}
console.log(numbers);

// Ordem decrescente
for (let index = 0; index < numbers.length; index += 1) {
    for (let indexCompare = 0; indexCompare < numbers.length - index; indexCompare += 1) {
        if (numbers[indexCompare] < numbers[indexCompare + 1]) {
            let smaller = numbers[indexCompare];
            numbers[indexCompare] = numbers[indexCompare + 1];
            numbers[indexCompare + 1] = smaller;
        }
    }
}
console.log(numbers);

// Multiplicando valores do array
console.log(copyNumbers);
let result = [];
for(let index = 0; index < copyNumbers.length; index += 1) {
    if (index === copyNumbers.length - 1) {
        result[index] = copyNumbers[index] * 2;
    }else {
        result[index] = copyNumbers[index] * copyNumbers[index + 1];
    }
}
console.log(result);

// Formas geometricas
let number = 5;
let symbol = "*";
if (number > 1) {
    let line = "";
    for (index = 0; index < number; index += 1) {
        line += symbol;
    }
    for (index = 0; index < number; index += 1) {
        console.log(line);
    }
}else {
    console.log("Valor invalido !");
}
console.log(lineStyle);
if (number > 1) {
    let line = "";
    for (index = 0; index <= number; index += 1) {
        console.log(line);
        line += symbol;
    }
}else {
    console.log("Valor invalido !");
}