
  //TIPOS DE DADOS
  
  var age = 38;//number

    var myName = "Will" // string

    var height = 1.73 // number

    var isStudent = false // boleano true/false

    var person = {
        "name": "Silmara",
        "age": 38,
        "height":1.73
        }   

    var students = ["Sil","Will","Marcio"]

    var object = null;


var myName = "Will" //ariável recomenda-se usar sempre inicar por caixa baixa

let language = "javasipt";

const pattern = "ECMAScript";


//função de soma
function sum(a,b){
    return a+b;
}

console.log(sum(2,5));

console.log(typeof object);//identifica tipo da variável 


// OPERADORES ARITMETICOS

//adição
var somaDoisNumeros = 1 + 3;
console.log("Operador adição: " + somaDoisNumeros);

//subtração
var subtracaoDoisNumeros = 4-1;
console.log("Operador subtração: " + subtracaoDoisNumeros);

//multiplicação
var multiplicaDoisNumeros = 4*2;
console.log("Operador multiplicação: " + multiplicaDoisNumeros);

//divisão
var divisaoDoisNumeros = 4/2;
console.log("Operador divisão: " + divisaoDoisNumeros);

//resto de divisão ou módulo
var restoDoisNumeros = 4%3;
console.log("Operador resto: " + restoDoisNumeros);

//incremento
var num = 5;
console.log("Incremento: " + (++num));

//decremento
var num = 2;
console.log("Decremento: " + (--num));


// OPERADORES DE ATRIBUIÇÃO

var x = 4;
var y = 3;
console.log("Soma=" + (x+=y));

var x = 4;
var y = 3;
console.log(x-=y);

var x = 4;
var y = 3;
console.log("Divisão=" + (x/=y));

var x = 4;
var y = 3;
console.log("Multiplicação=" + (x*=y));

var x = 4;
var y = 3;
console.log("Resto=" + (x%=y));

//OPERADORES DE COMPARAÇÃO

// ==         comparação valores
// ===        comparação tipos
// !=         diferente de
// < ou <=    menor ou menor igual
// > ou >=    maior ou maior igual


//OPERADORES LÓGICOS

// && ou AND (e)
// || ou OR (ou)
// ! (negação)


///////////////PRÁTICA CONDICIONAIS//////////////
console.log("condicionais")
var num = 1;
num = 5 ;

if (num === 1){
    console.log("num é igual a 1")
}else if (num === 2){
    console.log("num é igual a 2")}
    else{
        console.log("num é 5")        
}

//switch case
var mes = "janeiro"

switch (mes){
    case "fevereiro": console.log("mes 2")
    break;
    case "março": console.log("mes 3")
    break;
    case "janeiro": console.log("mes 1")
    break;
    default: console.log("nenhum dos casos atendidos")
}

////////REPETIÇÃO///////
console.log("Repeticões")

var colors = ["Vermelho", "Amarelo", "Azul", "Verde","Laranja"]

for (var i=0; i<colors.length; i++){
    console.log("Cor: " + colors[i]);
}


for (var i=0; i < 10;i++){
    console.log(i);
}