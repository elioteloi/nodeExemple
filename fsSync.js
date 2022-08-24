const {readFileSync, writeFileSync} = require("fs")

const fs = require("fs")
fs.readFileSync

const first = readFileSync("./content/first.text", "utf8")
const second = readFileSync("./content/second.text", "utf8")

// console.log(first, second);

writeFileSync("./content/result-sync.txt", `Here is the result: ${first}< ${second}`)