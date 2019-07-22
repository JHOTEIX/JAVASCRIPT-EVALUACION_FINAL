
//Declaracion de variables
var num1 = 0, num2 = 0, opera, sign;

document.getElementById('1').onclick = function(){displayNum('1')};
document.getElementById('2').onclick = function(){displayNum('2')};
document.getElementById('3').onclick = function(){displayNum('3')};
document.getElementById('4').onclick = function(){displayNum('4')};
document.getElementById('5').onclick = function(){displayNum('5')};
document.getElementById('6').onclick = function(){displayNum('6')};
document.getElementById('7').onclick = function(){displayNum('7')};
document.getElementById('8').onclick = function(){displayNum('8')};
document.getElementById('9').onclick = function(){displayNum('9')};
document.getElementById('0').onclick = function(){displayNum('0')};

document.getElementById('on').onclick = function(){on()};
document.getElementById('punto').onclick = function(){punto()};
document.getElementById('igual').onclick = function(){esIgual()};

document.getElementById('mas').onclick = function(){operar(1)};
document.getElementById('menos').onclick = function(){operar(2)};
document.getElementById('por').onclick = function(){operar(3)};
document.getElementById('dividido').onclick = function(){operar(4)};
document.getElementById('raiz').onclick = function(){operar(5)};
document.getElementById('sign').onclick = function(){if(num1>0){num1='-'+(num1);}else if(num1<0){num1=-1*(num1);} refrescar();};

//Función que coloca el número presionado
function displayNum(numero){
    if(num1==0 && num1 !== '0.'){
        num1 = numero;
    }else{
        num1 += numero;
    }
    num1=num1.slice(0,4);
    refrescar();
}

//Función que coloca la coma al presionar dicho botón
function punto(){
if(num1 == 0) {
    num1 = '0.';
} else if(num1.indexOf('.') == -1) {
    num1 += '.';
}
refrescar();
}

//Función que coloca la ON/C al presionar dicho botón
function on(){
num1 = 0;
num2 = 0;
refrescar();
}


//Esta función realiza las distintas operaciones aritméticas en función del botón pulsado
function operar(valor){
if (num1 == 0){
    num1 = parseFloat(document.getElementById("display").textContent);
}
num2 = parseFloat(num1);
num1= 0;
opera = valor;
limpiar();
}

//Función para pulsar igual
/*
suma = 1
resta = 2
multiplicacion = 3
division = 4
raiz = 5
sign = 6
*/

function esIgual(){
    num1 = parseFloat(num1);
    switch (opera){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 *= num2;
        break;
        case 4:
            num1 = num2 / num1;
        break;
        case 5:
            num1 = Math.sqrt(num2);
        break;
    }
    fixed();
    refrescar();
    num2 = parseFloat(num1);
    
}

function limpiar(){
    display.textContent = "";
}