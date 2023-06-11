function sum(...args) {
  let suma = 0;
  for (let i = 0; i < args.length; i++) {
    suma = suma + args[i];
  }
  return suma;
}
console.log(sum(1, 2, 3));
