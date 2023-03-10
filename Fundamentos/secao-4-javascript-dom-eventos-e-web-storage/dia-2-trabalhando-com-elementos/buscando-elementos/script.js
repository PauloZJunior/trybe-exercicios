const whereYouAre = document.querySelector('#elementoOndeVoceEsta');
const father = whereYouAre.parentElement;
father.style.color = 'purple';
const firstSonOfSon = document.querySelector('#primeiroFilhoDoFilho');
firstSonOfSon.innerText = 'HELLO WORLD!';
const firstSonOfFather = father.firstElementChild;
const firstSon = whereYouAre.previousElementSibling;
const atention = whereYouAre.nextSibling;
const thirthSon = whereYouAre.nextElementSibling;
const thirthSonFromFather = father.lastElementChild.previousElementSibling;
// console.log(thirthSonFromFather);

console.log(document.getElementById('stark_childs').previousElementSibling.innerText);