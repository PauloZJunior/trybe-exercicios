const productCost = 10;
const productSale = 99;

if (productCost >= 0 && productSale >= 0) {
    let totalCost = productCost + (0.2 * productCost);
    let profit = (productSale - totalCost) * 1000;
    console.log("O lucro e de: " + profit)
}else {
    console.log("Valor nao pode ser negativo!");
}