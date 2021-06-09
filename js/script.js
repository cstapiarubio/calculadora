var x = prompt("Ingresa el primer número");
var y =prompt("Ingresa el segundo número");
var operador= prompt("Ingresa un operador: suma +, multiplicaión *, división /, resta -");

 x= parseInt(x);
 y=parseInt(y);

 //var suma = x+y;
//document.write("La suma entre los números es: "+ suma);
document.write('<table class="table table-striped"><thead><tr><th scope="col">Número A</th><th scope="col">Número B</th><th scope="col">Operador</th><th scope="col">Resultado</th></tr></thead>');
document.write('<tbody><tr><td>'+x+'</td><td>'+y+'</td><td>'+operador+'</td><td>'+eval(x+operador+y)+'</td>');
document.write(' </tr></tbody></table>');
    