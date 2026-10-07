import { readFileSync, writeFileSync } from "node:fs";
const html = readFileSync(new URL("source/index.html", import.meta.url), "utf8")
  .replace('<link rel="stylesheet" href="style.css">', '<style>' + readFileSync(new URL("source/style.css", import.meta.url), "utf8") + '</style>')
  .replace('<script src="app.js"></script>', '<script>' + readFileSync(new URL("source/app.js", import.meta.url), "utf8") + '</script>');
writeFileSync(new URL("index.html", import.meta.url), html);
console.log("Built portable index.html with all styles and scripts embedded.");
