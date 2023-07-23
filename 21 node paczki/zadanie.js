const { readFile } = require("fs").promises;
const { watch } = require("chokidar");

const userPath = `${process.argv[2]}\\**\\*.js`;

console.log(`Ścieżka: ${userPath}`);

watch(userPath, {
  awaitWriteFinish: true,
  ignoreInitial: true,
})
  .on(`add`, async (path) => {
    const readingFile = await readFile(path, `utf8`);
    console.log(`Stworzono ${readingFile} w ścieżce \n${userPath}\n`);
  })
  .on(`unlink`, (path) => {
    console.log(`Usunięto ${path}`);
  })
  .on(`change`, async (path) => {
    const readingChangeFile = await readFile(path, `utf8`);
    console.log(`Zmiany w pliku ${path}: \n${readingChangeFile}`);
  })
  .on(`ready`, () => {
    console.log(`Program jest gotowy do nasłuchiwania:`);
  });
