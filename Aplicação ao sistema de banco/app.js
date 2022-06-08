// Sistema de cadstro de clientes

let nome = "Lucas";
let sobreNome = "Bitencourt";
let idade = 35;
const numCliente = 012354;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;
let numParcelas = 72;
let ehBomPagador = true;

// Montante = valorEmprestimo + juros
// Juros = valorEmprestimo * taxaDeJuros * numAnos

 let juros = valorEmprestimo * taxaDeJuros * numAnos;
 let montante = valorEmprestimo + juros; 
 let valorTotal = montante / numParcelas
 console.log("Sr." + nome + " O valor total do seu emprestimo é de: " + montante + " Parcelado em " + numParcelas + "x de " + valorTotal);

// ESTRUTURAS CONDICIONAIS
// Bom pagador ou não?

if(ehBomPagador){
    console.log("Sr." + nome + ", Seu pagamento estar em dia, você é um bom pagador!");
} else{
    console.log("O cliente " + nome + " não é um bom pagador.")
}

// OPERADOR TERNÁRIO
console.log("O cliente " + nome + (ehBomPagador ? " é bom pagador" : "não é bom pagador."));

// ELSE IF - Taxa de juros por idade
/*
18 à 25 anos -> 9%
26 à 35 anos -> 8%
36 à 50 anos -> 7%
51 ou mais anos -> 6%
*/

if(idade >= 18 && idade <= 25){
    taxaDeJuros = 0.09;
} else if(idade >= 26 && idade <= 35){
    taxaDeJuros = 0.08;
} else if(idade >= 36 && idade <= 50){
    taxaDeJuros = 0.07;
} else{
    taxaDeJuros = 0.06;
}
console.log(taxaDeJuros);

 

