const paragraph = document.getElementById("paragraph");
    paragraph.style.color = "red";
     
document.getElementById("page-title").innerText = 'One Piece';
document.getElementById("second-paragraph").innerText = 'HELLO WORLD!';
document.getElementById("subtitle").style.color = 'white';
document.getElementById("subtitle").style.backgroundColor = 'red';
let pilotosF1Atual = document.getElementsByClassName("piloto-f1-atual");
for (let index = 0; index < pilotosF1Atual.length; index += 1) {
    console.log(pilotosF1Atual[index]);
}