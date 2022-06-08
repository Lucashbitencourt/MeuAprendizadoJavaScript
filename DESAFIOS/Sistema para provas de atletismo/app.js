// Sistema para provas de Atletismo

let tempo1 = 0.35
let tempo2 = 0.37
let tempo3 = 0.34

if(tempo1 < tempo2 && tempo1 < tempo3){
    console.log("Corredor 1 você venceu a prova!");
}else if(tempo2 < tempo1 && tempo2 < tempo3){
    console.log("Corredor 2 você venceu a prova!")
} else{
    console.log("Corredor 3 você venceu a prova!")
}