const { promisify } = require("util");
const { exec } = require("child_process");
const { resolve } = require(`path`);

try {
  (async () => {
    const userPath = resolve(process.argv[2]);
    const { stdout } = await exec("dir", {
      cwd: userPath,
    });
    console.log(`Path: ${userPath}`, stdout);
  })();
} catch (e) {
  console.log(`Error!`, e.message);
}
