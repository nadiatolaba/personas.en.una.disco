let totalPersonas: number = Number(
  prompt(`Ingrese cantidad de personas en la disco`)
);
let personas: number[] = new Array(totalPersonas);
let i: number;
let menores21: number = 0;
let mayores21: number = 0;

for (i = 0; i < totalPersonas; i++) {
  personas[i] = aleatorio(19, 40);
  if (personas[i] < 21) {
    menores21 += 1;
  } else {
    mayores21 += 1;
  }
}

console.log(`${menores21} personas son menores de 21 años`);
console.log(`${mayores21} personas son mayor o igual de 21 años`);
console.log(`${totalPersonas} es la cantidad total de personas`);

function aleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
