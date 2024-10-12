const fs = require("fs");

const count = Number(process.argv[2]); // odczyt liczby obiektów
let marka = []; // tablica z obiektami

fs.readFile("marka.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //podział łańcucha z imionami na wiersze.
  marka = data
    .split("\n")
    .map((s) => s.trim())
    .filter((n) => n.length != 0);
  let content = "export const data = [";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < count; i++) {
    content += `
  {
    id: ${i + 1},
    name: "${marka[Math.floor(Math.random() * marka.length)]}",
    year: ${Math.floor(Math.random() * 10 + 2000)},
    registrationNumber: "KR ${Array.from({ length: 6 }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("")}"
  }${i < count - 1 ? "," : ""}`;
  }
  content += "\n];";
  // console.log(content);
  //zapis łańcucha do pliku
  fs.writeFile("./src/module-data.js", content, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("module-data.js generated");
  });
});
