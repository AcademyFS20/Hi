
var a = prompt()
var b = prompt()
var c = prompt()

function x1 (a, b, c) {return (((-1)*b)-Math.sqrt(Math.pow(b,2))-(4*a*c))/(2*a);}
var result_x1 = x1 (a, b, c);
alert ("x1 = " + result_x1)

function x2 (a, b, c) {return (((-1)*b)+Math.sqrt(Math.pow(b,2))-(4*a*c))/(2*a);}
var result_x2 = x2 (a, b, c);
alert ("x2 = " + result_x2)