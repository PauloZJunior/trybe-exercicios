// exercício 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log(`Bem vinda, ${info.personagem}`);
info.recorrente = 'Sim';
console.log('==================');
for (let key in info) {
  console.log(key);
}
console.log('==================');
for (let value in info) {
  console.log(info[value]);
}
const secondInfo = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};
