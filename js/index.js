// Take value of input
let value = document.getElementById('valInput');
// add listener
value.addEventListener('input', convert);

function convert(event) {
let lb = event.target.value;
console.log(event.target.value)

//convert and print grams pound to grams
document.getElementById('gramsOutput').innerHTML= lb/0.00220462262185;

//convert and print grams pound to grams to kg
document.getElementById('kgOutput').innerHTML= lb/2.2046;

//convert and print pound to ounces 
document.getElementById('ozOutput').innerHTML= lb*16;

}