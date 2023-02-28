const grade = 86;
if (grade < 0 || grade > 100) {
    console.log("Nota invalida!");
}else if (grade >= 90) {
    console.log("Nota: A");
}else if (grade >= 80 && grade < 90) {
    console.log("Nota: B");
}else if (grade >= 70 && grade < 80) {
    console.log("Nota: C");
}else if (grade >= 60 && grade < 70) {
    console.log("Nota: D");
}else if (grade >= 50 && grade < 60) {
    console.log("Nota: E");
}else if (grade < 50) {
    console.log("Nota: F");
}