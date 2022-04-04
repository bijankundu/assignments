const argv = require("minimist")(process.argv.slice(2));
const readline = require("readline");
const axios = require("axios");
const fs = require("fs");

const processData = async (searchTerm = "", logFileName = "file.log") => {
  const { data } = await axios(
    `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&limit=1&namespace=0&format=json`
  );

  fs.appendFile(logFileName, `${data[data.length - 1][0]}\n`, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

if (argv._.length > 0) {
  processData(argv._[0], argv.f);
} else {
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt("Enter a search term\n");
  rl.prompt();
  rl.on("line", function (line) {
    processData(line, argv.f);
    rl.close();
  });
}
