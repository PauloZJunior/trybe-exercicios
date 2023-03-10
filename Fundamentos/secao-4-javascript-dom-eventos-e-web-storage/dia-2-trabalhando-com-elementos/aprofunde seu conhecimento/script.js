const mainTitle = document.createElement('h1');
const mainContent = document.createElement('main');
const centerContent = document.createElement('section');
const paragraph = document.createElement('p');
const leftContent = document.createElement('section');
const rightContent = document.createElement('section');
const image = document.createElement('img');
const uList = document.createElement('ul');


mainTitle.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(mainTitle);


mainContent.className = 'main-content';
document.body.appendChild(mainContent);


centerContent.className = 'center-content';
mainContent.appendChild(centerContent);


paragraph.innerText = 'HELLO WORLD!'
centerContent.appendChild(paragraph);


leftContent.className = 'left-content';
mainContent.appendChild(leftContent);


rightContent.className = 'right-content';
mainContent.appendChild(rightContent);


image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftContent.appendChild(image);


const numberNames = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
rightContent.appendChild(uList);
for (let index = 0; index < numberNames.length; index += 1) {
    const listItem = document.createElement('li');
    listItem.innerText = numberNames[index];
    uList.appendChild(listItem);
}


for (let index = 0; index < 3; index += 1) {
    const titleH3 = document.createElement('h3');
    titleH3.className = 'description';
    titleH3.innerText = index + 1;
    mainContent.appendChild(titleH3);
}


mainTitle.className = 'title';


// const removeLeftContent = document.getElementsByClassName('left-content')[0];
// mainContent.removeChild(removeLeftContent);


rightContent.style.marginRight = 'auto';


centerContent.parentNode.style.backgroundColor = 'green';


uList.lastChild.remove();
uList.lastChild.remove();