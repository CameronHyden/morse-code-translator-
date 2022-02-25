const userTextBox = document.querySelector("#text-input");
const userResultBox = document.querySelector("#text-output");
const morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "    ",
};
const convertToMorse = () => {
  const translation = userTextBox.innerHTML
    .toLowerCase()
    .split("")
    .map((morse) => {
      return morseCode[morse] ? morseCode[morse] : morse;
    })
    .join(" ");

  userResultBox.innerHTML = translation;
};
convertToMorse();
