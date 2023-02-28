const a = 100;
const b = 40;
const c = 0;
if (a <= 0 || b <= 0 || c <= 0){
    console.log("Valor invalido");
}else if (a + b + c !== 180){
    console.log(false);
}else {
    console.log(true);
}