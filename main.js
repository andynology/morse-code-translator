// You’re tasked with creating a website that can translate between english and morse code.
// As an extension it should be able to translate both ways.

const userInput = document.querySelector('#user__input').textContent;
const generateMorseBtn = document.querySelector('.generate');

// Store the Alphabet
const alphabetArray = ["A", "B", "C", "D", "E", "F", "G",
                       "H", "I", "J", "K", "L", "M", "N", 
                       "O", "P", "Q", "R", "S", "T", "U",
                       "V", "W", "X", "Y", "Z"];
// Store the morse code
const morseArray = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.",
                    "....", "..", ".---", "-.-", ".-..", "--", "-.", 
                    "---", ".--.", "--.-", ".-.", "...", "-", "..-",
                    "...-", ".--", "-..-", "-.--", "--.."];


const morseObject = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
}

const morseObjectArray = Object.entries(morseObject);
const morseObjectValues = Object.values(morseObject);
const morseObjectKeys = Object.keys(morseObject);
console.log(morseObjectKeys);
console.log(morseObjectValues);


// Function that splits up user input into individal characters and returns in new array

const userInputArr = () => {
    const removeStrSpaces = userInput.split(" ").join("").toUpperCase();
    const newArray = removeStrSpaces.split("");
    return newArray;
}













const generateMorse = () => {
    // inputString should take the user input, split it, remove the spaces and join it back together, 
    // e.g. "Hello world, my name is Jake" becomes "Helloworld,mynameisJake"
    // Characters converted to upper case in order to compare with alphabetArray
//     const inputStringArr = userInput.split(' ').join('').toUpperCase();

//     switch (inputStringArr) {
//         case "A": 
//             return 1;
//             break;
//         case "B":
//             return 2;
//             break;
//         case "C":
//             return 3;
//             break;
//         case "D":
//             return 4;
//             break;
//         case "E":
//             return 5;
//             break;
//         case "F":
//             return 6;

//     }
    
// }








generateMorseBtn.addEventListener('click', () => {
    generateMorse();
    // userInput.split(' ').join('');
    // console.log(userInput);
    // const userArray = userInput.split(' ').join('');
    // What do I want to do when the generate button is clicked? 
    // Run a function that takes the user input, splits up the string into individual characters,
    // Target the inner HTML to show output. 
})
// ON CLICK -> Run a function -> Convert english to morse 

// 'Convert english to morse' -> get the Letter, and find the corresponding morse 

// Create two arrays -> one for letters of alphabet, one with the morse