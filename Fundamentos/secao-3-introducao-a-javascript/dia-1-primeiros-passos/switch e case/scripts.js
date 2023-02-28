
mes = 'outubro';
let estacaoDoAno = '';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
        break;
    default:
        console.log("Mes Incorreto!")
}

console.log(estacaoDoAno); // 'Outono'


// para fixar

let condition = "lista";

switch (condition) {
    case "aprovada":
        console.log("Parabens, voce esta no grupo de pessoas aprovadas!");
        break;
    case "lista":
        console.log("Voce esta na nossa lista de espera!");
        break;
    case "reprovada":
        console.log("Infelizmente, voce reprovou!");
        break;
    default:
        console.log("Informacao incorreta!");
}