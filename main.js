const englishInput = document.querySelector("#english-word");
const morseTranslateResult = document.querySelector("#morse-translate-result");
const morseInput = document.querySelector("#morse-word");
const englishTranslateResult = document.querySelector("#english-translate-result");

const englishToMorse = {
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
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

const morseToEnglish = {
  "-----": "0",
  ".----": "1",
  ".----": "2",
  ".----": "3",
  ".----": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "-.-.--": "!",
  "-....-": "-",
  "-..-.": "/",
  ".--.-.": "@",
  "-.--.": "(",
  "-.--.-": ")",
  " ": " "
};

// english to morse translator
 const translateEnglishToMorse = (englishWord) => {
  if (typeof englishWord !== "string") {
    return "invalid input";
  }

  const lowerCaseWord = englishWord.toLowerCase();
  const morseArray = lowerCaseWord.split("").map((character) => {
    return englishToMorse[character];
  });

  return morseArray.join(" ");
};


//morse to english 

const decodeLetter = character => {
  return morseToEnglish[character];
}

const decodeWord = word => {
  return word.split(' ').map(decodeLetter).join('');
}

const decodeMorse = morseCode => {
  return morseCode.trim().split('  ').map(decodeWord).join(' ');
}

const handleMorseInput = (event) => {
  const inputValue = event.target.value;
  const result = decodeMorse(inputValue);
  englishTranslateResult.innerText = result;
};



const handleInput = (event) => {
  const inputValue = event.target.value;
  const result = translateEnglishToMorse(inputValue);
  morseTranslateResult.innerText = result;
};

englishInput.addEventListener("input", handleInput);
morseInput.addEventListener("input", handleMorseInput);
