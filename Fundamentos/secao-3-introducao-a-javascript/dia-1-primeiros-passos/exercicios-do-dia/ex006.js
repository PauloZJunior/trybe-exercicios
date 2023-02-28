const chessPiece = "king";

switch (chessPiece.toLowerCase()) {
    case "king":
        console.log("*** REI (KING) ***");
        console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez.");
        break;
    case "queen":
        console.log("*** RAINHA (QUEEN) ***");
        console.log("Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.")
        break;
    case "rook":
        console.log("*** TORRE (ROOK) ***");
        console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
        break;
    case "bishop":
        console.log("*** BISPO (BISHOP) ***");
        console.log("Move-se na diagonal, quantas casas quiser.");
        break;
    case "knight":
        console.log("*** CAVALO (KNIGHT) ***");
        console.log("O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”, ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal. É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas.");
        break;
    case "pawn":
        console.log("*** PEÃO (PAWN) ***");
        console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro.");
        break;

    default:
        console.log("Peça inválida!");
}