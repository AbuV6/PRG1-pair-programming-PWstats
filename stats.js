const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";
let counter = 0
if (fs.existsSync(outputFile)) { // check for existing output file
  fs.unlinkSync(outputFile); // delete it true. (To start a fresh file)
}

const data = fs.readFileSync(inputFile, "utf-8");
const lines = data.split(/\n/);

for (line of lines) {
      
      elements = line.split(delimiter);
      counter += elements[1].length
}
  fs.appendFileSync("./word_count.csv", `Word Count: ${counter}` , "utf-8")
  console.log(counter)

