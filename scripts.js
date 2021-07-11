
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
console.log("-----------operadores aritmeticos------------")
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
console.log("----------condicionais-----------")
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
console.log("----------Repeticões----------")

var colors = ["Vermelho", "Amarelo", "Azul", "Verde","Laranja"]

for (var i=0; i<colors.length; i++){
    console.log("Cor: " + colors[i]);
}


for (var i=0; i < 10;i++){
    console.log(i);
}

var i = 10;
while(i<30){
    console.log(i);
    i++;
}

var x = 1;
do {
    console.log("valor de x:" + x);
    x++;
}
    while (x<30);



//////// FUNÇÕES /////////boa prática ser verbo da ação

function sayHello (){
    console.log("Hello function!!!")
}
sayHello();

function sayHello (name, lastName){
    console.log("Hello," + name + " " + lastName);
}
sayHello("William", "Kiyoshi");

function sum(a,b){
    return a + b;
}
console.log(sum(3,4));


///////////CLASSES//////////////

console.log("-------------classe---------------")

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
}

read (){
    return `Estou lendo ${this.title}` // interpolação
}
}

let book = new Book("Livro 1","Will","150"); //instancia objeto
let otherBook = new Book("Livro 2","Marcio","100");

console.log(otherBook, book);
console.log(book.read());

////////// HERANÇA///////////
console.log("-------herança--------")
class ITBook extends Book{
    constructor (title, author,pages, technology){
        super(title,author,pages);
        this.technology = technology;
    }
}

let itbook = new ITBook ("Livro 3","Leo","190","Javascript");

console.log(itbook);

//////// ENCAPSULAMENTO ///////////
console.log("-----------------Encapsulamento------------------")

class Person {
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}

let pessoa = new Person ("William");
pessoa.name = "Will";
console.log(pessoa.name);



//////////////EXERCICIO////////////////
console.log("------------------EXERCICIOS MODULO 4--------------------")

let resultado = fizzBuzz(16);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== "number")
        return "Não é um número";
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return "FizzBuzz";
    if (entrada % 3 === 0)
        return "Fizz";
    if (entrada % 5 === 0)
        return "Buzz";
    else 
        return entrada;
}

//reverse string
let newStr = '';

function reverserAString (str){
    for (let i= str.length -1; i>=0 ;i--){
        newStr += str[i];
        console.log(newStr);
    }
}

let resultado2 = reverserAString('Hello');


//convert celsius p/ fahrenheit
function convertToFahrenheit(value){
    return value * 1.8 + 32;
}

let resultado3 = convertToFahrenheit(1);
console.log(`O valor em fahrenheit é ${resultado3}`);


// to do list
const listaContainer = document.querySelector('[data-lists]');
const newlistaForm = document.querySelector('[data-new-list-item-form]');
const newlistaInput = document.querySelector('[data-new-list-input]');

let lists = [];

newlistaForm.addEventListener('submit', function(e){
    e.preventDefault();
    const listName = newlistaInput.value;

    if (listName === null || listName === "") return
    const list = createList (listName) 
    newlistaInput.value = null;
    lists.push (list);
    render();
})

function render(){
    limparElemento(listaContainer);
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name;
        listaContainer.appendChild(item);
        })
}

function createList(nome){
    return {
        id: Date.now().toString(), 
        name: nome
    }
}

function limparElemento(element){
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}

//render()