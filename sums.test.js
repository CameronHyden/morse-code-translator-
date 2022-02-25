import { expect,it,describe } from "@jest/globals";
import {translation, getTranslation} from "./main";


describe("get text and return a string of morse code representing its value", () => {

    it("Should return a new string of morse code", () => {
        //Write tests in here 
        const result = getTranslation("hello world")
        expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
    });
    it("handle/ignore spaces between text", () => {
        //Write tests in here 
        const result = getTranslation("hello     world")
        expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
    });

    it("produce an error if invalid characters are inputted", () => {
        //Write tests in here 
        const result = checkText("hello world;;")
        expect(result).toBe("error input, cannot translate ;;")
    });
    it("should lowercase all inputted text so it will match the saved values ", () => {
        //Write tests in here 
        const result = checkText("Hello World")
        expect(result).toBe("hello world")
    });
   
});

// describe("a refresh button should remove translated text", () => {

//     it("should remove all english and morse code text, test click event", () =>{

//         const refreshScreen = jest.fn();
//         const button = ((<button> onClick={refreshScreen}>click to refresh</button>));
//         button.find('button').simulate('click');
//         expect(screen.innerHTML).toBe(" ")
//     });
// });

// extension

describe("get morse code and return a string of text representing its value", () => {

    it("Should return a new string of morse code", () => {
        //Write tests in here 
        const result = getMorseTranslation(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
        expect(result).toBe("hello world")
    });    
});