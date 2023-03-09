let word = 'banana';
let invertedWord = "";
for (index = word.length - 1; index >= 0; index -= 1) {
    invertedWord += word[index];
}
console.log(invertedWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let smallestWord = "";
let biggestWord = "";
for (index = 0; index < array.length; index += 1) {
    if (index == 0) {
        smallestWord = array[index];
        biggestWord = array[index];
    }else if (smallestWord.length > array[index].length) {
        smallestWord = array[index];
    }else if (biggestWord.length < array[index].length) {
        biggestWord = array[index]
    }
}
console.log("MAIOR PALAVRA - " + biggestWord);
console.log("MENOR PALAVRA - " + smallestWord);