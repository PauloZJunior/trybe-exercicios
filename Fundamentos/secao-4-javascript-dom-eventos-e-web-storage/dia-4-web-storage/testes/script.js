//localStorage - salva os dados sem data de expiração. Os dados não serão removidos quando o browser for fechado, ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos.

console.log('** LOCAL STORAGE **');
console.log(localStorage.length);
localStorage.setItem('firstName', 'Adam');
localStorage.setItem('lastName', 'Smith');
console.log(localStorage.getItem('lastName'));
console.log(localStorage.getItem('firstName'));
console.log(localStorage.length);
console.log(localStorage.getItem('firstName').length);
localStorage.removeItem('lastName');
console.log(localStorage.length);
localStorage.clear();
console.log(localStorage.length);

//sessionStorage - salva os dados apenas para a sessão atual. Os dados são removidos assim que a pessoa fecha a aba (tab) ou o navegador (browser).

sessionStorage.clear();
console.log('** SESSION STORAGE **');
console.log(sessionStorage.length);
sessionStorage.setItem('firstName', 'Paulo');
sessionStorage.setItem('surName', 'Zanateli');
sessionStorage.setItem('lastName', 'Junior');
console.log(sessionStorage.length);
console.log(sessionStorage.getItem('surName'));
console.log(sessionStorage.getItem('surName').length);
sessionStorage.removeItem('surName');
console.log(sessionStorage.length);
sessionStorage.clear();
console.log(sessionStorage.length);  

//o JSON possui dois métodos: o JSON.stringify(), que transforma um dado em uma string JSON e o JSON.parse(), que converte essa string de volta para o formato original.

const myObject = {
    name: 'Paulo',
    surname: 'Zanateli',
    lastname: 'Junior',
    age: 26,
    email: 'paulo@hotmail.com',
    male: true,
};

localStorage.setItem('myData', JSON.stringify(myObject));
// Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor {name: 'Paulo', surname: 'Zanateli', lastname: 'Junior', age: 26, email: 'paulo@hotmail.com', male: true,}

// Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.

const recoveredObject = JSON.parse(localStorage.getItem('myData'));
// Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.

console.log(recoveredObject);

let myLocalStorage = localStorage;
let mySessionStorage = sessionStorage;

console.log(myLocalStorage);
console.log(mySessionStorage);

myLocalStorage.setItem('school', JSON.stringify(myObject));

let org = JSON.parse(myLocalStorage.getItem('school'));
console.log(org);