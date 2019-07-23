var mdCalculadora = (function(document, undefined){
//Declaracion de variables
var num1 = 0, num2 = 0, opera, sign;

// Declaracion de eventos
document.getElementById('1').onclick = function(){displayNum('1')};
document.getElementById('1').onmousedown=function(){document.getElementById('1').style.transform ="scale(0.97)";};
document.getElementById('1').onmouseup=function(){document.getElementById('1').style.transform ="scale(1)";};

document.getElementById('2').onclick = function(){displayNum('2')};
document.getElementById('2').onmousedown=function(){document.getElementById('2').style.transform ="scale(0.97)";};
document.getElementById('2').onmouseup=function(){document.getElementById('2').style.transform ="scale(1)";};

document.getElementById('3').onclick = function(){displayNum('3')};
document.getElementById('3').onmousedown=function(){document.getElementById('3').style.transform ="scale(0.97)";};
document.getElementById('3').onmouseup=function(){document.getElementById('3').style.transform ="scale(1)";};

document.getElementById('4').onclick = function(){displayNum('4')};
document.getElementById('4').onmousedown=function(){document.getElementById('4').style.transform ="scale(0.97)";};
document.getElementById('4').onmouseup=function(){document.getElementById('4').style.transform ="scale(1)";};

document.getElementById('5').onclick = function(){displayNum('5')};
document.getElementById('5').onmousedown=function(){document.getElementById('5').style.transform ="scale(0.97)";};
document.getElementById('5').onmouseup=function(){document.getElementById('5').style.transform ="scale(1)";};

document.getElementById('6').onclick = function(){displayNum('6')};
document.getElementById('6').onmousedown=function(){document.getElementById('6').style.transform ="scale(0.97)";};
document.getElementById('6').onmouseup=function(){document.getElementById('6').style.transform ="scale(1)";};

document.getElementById('7').onclick = function(){displayNum('7')};
document.getElementById('7').onmousedown=function(){document.getElementById('7').style.transform ="scale(0.97)";};
document.getElementById('7').onmouseup=function(){document.getElementById('7').style.transform ="scale(1)";};

document.getElementById('8').onclick = function(){displayNum('8')};
document.getElementById('8').onmousedown=function(){document.getElementById('8').style.transform ="scale(0.97)";};
document.getElementById('8').onmouseup=function(){document.getElementById('8').style.transform ="scale(1)";};

document.getElementById('9').onclick = function(){displayNum('9')};
document.getElementById('9').onmousedown=function(){document.getElementById('9').style.transform ="scale(0.97)";};
document.getElementById('9').onmouseup=function(){document.getElementById('9').style.transform ="scale(1)";};

document.getElementById('0').onclick = function(){displayNum('0')};
document.getElementById('0').onmousedown=function(){document.getElementById('0').style.transform ="scale(0.97)";};
document.getElementById('0').onmouseup=function(){document.getElementById('0').style.transform ="scale(1)";};

document.getElementById('on').onclick = function(){on()};
document.getElementById('on').onmousedown=function(){document.getElementById('on').style.transform ="scale(0.97)";};
document.getElementById('on').onmouseup=function(){document.getElementById('on').style.transform ="scale(1)";}

document.getElementById('punto').onclick = function(){punto()};
document.getElementById('punto').onmousedown=function(){document.getElementById('punto').style.transform ="scale(0.97)";};
document.getElementById('punto').onmouseup=function(){document.getElementById('punto').style.transform ="scale(1)";}

document.getElementById('igual').onclick = function(){esIgual()};
document.getElementById('igual').onmousedown=function(){document.getElementById('igual').style.transform ="scale(0.97)";};
document.getElementById('igual').onmouseup=function(){document.getElementById('igual').style.transform ="scale(1)";}

document.getElementById('mas').onclick = function(){operar(1)};
document.getElementById('mas').onmousedown=function(){document.getElementById('mas').style.transform ="scale(0.97)";};
document.getElementById('mas').onmouseup=function(){document.getElementById('mas').style.transform ="scale(1)";}

document.getElementById('menos').onclick = function(){operar(2)};
document.getElementById('menos').onmousedown=function(){document.getElementById('menos').style.transform ="scale(0.97)";};
document.getElementById('menos').onmouseup=function(){document.getElementById('menos').style.transform ="scale(1)";}

document.getElementById('por').onclick = function(){operar(3)};
document.getElementById('por').onmousedown=function(){document.getElementById('por').style.transform ="scale(0.97)";};
document.getElementById('por').onmouseup=function(){document.getElementById('por').style.transform ="scale(1)";}

document.getElementById('dividido').onclick = function(){operar(4)};
document.getElementById('dividido').onmousedown=function(){document.getElementById('dividido').style.transform ="scale(0.97)";};
document.getElementById('dividido').onmouseup=function(){document.getElementById('dividido').style.transform ="scale(1)";}

document.getElementById('raiz').onclick = function(){operar(5)};
document.getElementById('raiz').onmousedown=function(){document.getElementById('raiz').style.transform ="scale(0.97)";};
document.getElementById('raiz').onmouseup=function(){document.getElementById('raiz').style.transform ="scale(1)";}

document.getElementById('sign').onclick = function(){if(num1>0){num1='-'+(num1);}else if(num1<0){num1=-1*(num1);} refrescar();};
document.getElementById('sign').onmousedown=function(){document.getElementById('sign').style.transform ="scale(0.97)";};
document.getElementById('sign').onmouseup=function(){document.getElementById('sign').style.transform ="scale(1)";}

//Función que coloca el número presionado
function displayNum(numero){
    if(num1==0 && num1 !== '0.'){
        num1 = numero;
    }else{
        num1 += numero;
    }
    num1=num1.slice(0,8);
    refrescar();
}

//Función que coloca el punto al presionar botón (.)
function punto(){
if(num1 == 0) {
    num1 = '0.';
} else if(num1.indexOf('.') == -1) {
    num1 += '.';
}
refrescar();
}

//Función que coloca la Borra Opercion al presionar  botón (ON/C)
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

//Función para pulsar iguaL  / suma = 1 / resta = 2 / multiplicacion = 3 / division = 4 / raiz = 5 / sign = 6

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
    refrescar();;
}

function refrescar(){
    if (num1 % 1 == 0) {
        num1=num1;
    } else {
        num1=parseFloat(num1);
        num1=num1.toFixed(2);
        }
    if(num1>99999999){
        num1=num1.toString();
        num1=num1.slice(0,7);
        num1=parseFloat(num1);
    }
    document.getElementById('display').textContent = num1;
}

function limpiar(){
    display.textContent = "";
}

})(document);

mdCalculadora.init();