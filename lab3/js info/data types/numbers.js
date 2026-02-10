let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

alert( 6.35.toFixed(20) );

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
