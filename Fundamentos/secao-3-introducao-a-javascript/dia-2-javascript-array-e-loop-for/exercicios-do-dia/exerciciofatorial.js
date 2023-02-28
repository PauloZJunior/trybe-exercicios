const num = 10;
let factorial = num;
for (index = num - 1; index > 0; index -= 1) {
    factorial *= index;             
}
console.log(num + "! = " + factorial);