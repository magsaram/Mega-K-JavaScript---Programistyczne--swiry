const { basename, extname } = require(`path`);

console.log(`Zaczynamy!`);
console.log(`Pełna ścieżka pliku: ${__filename}`);
console.log(`Folder, w którym jest plik: ${__dirname}`);
console.log(`nazwa pliku: ${basename(__filename)}`);
const path = process.argv[1];
console.log(`Rozszerzenie pliku: ${extname(path)}`);
console.log(`Koniec programu, dziękuję za uwagę.`);
