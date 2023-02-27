// Operador AND - &&

let currentHour = 22;
let message = "";
if (currentHour >= 22) {
    message = "Nao deveriamos comer nada, e hora de dormir!";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro cafe da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoco!!!"
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de cafe recem-passado!"
} else {
    message = "Voce esta dormindo ou esse horario nao existe!"
}
console.log(message);


// Operador OR - ||

let weekDay = "sabado";
if (weekDay === "sabado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido! UwU!")
} else {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}


// Operador NOT - !

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no JavaScript. Logo, seu oposto é true.