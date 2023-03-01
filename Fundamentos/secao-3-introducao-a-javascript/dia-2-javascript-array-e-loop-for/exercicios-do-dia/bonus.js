// Ordem crescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
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