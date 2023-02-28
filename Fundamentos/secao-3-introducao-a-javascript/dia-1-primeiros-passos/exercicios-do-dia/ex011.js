const grossSalary = 10000
let baseSalary;
let netSalary;
if (grossSalary <= 1556.94) {
    baseSalary = grossSalary - (8 / 100 * grossSalary);
}else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    baseSalary = grossSalary - (9 / 100 * grossSalary);
}else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    baseSalary = grossSalary - (11 / 100 * grossSalary);
}else {
    baseSalary = grossSalary - 570.88;
}
if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    netSalary = baseSalary - ((7.5 / 100 * baseSalary) - 142.8)
}else if (baseSalary >= 2826.65 && baseSalary <= 3751.05) {
    netSalary = baseSalary - ((15 / 100 * baseSalary) - 354.8)
}else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
    netSalary = baseSalary - ((22.5 / 100 * baseSalary) - 636.13)
}else if (baseSalary > 4664.68) {
    netSalary = baseSalary - ((27.5 / 100 * baseSalary) - 869.36)
}
console.log(baseSalary.toFixed(2));
console.log(netSalary.toFixed(2));