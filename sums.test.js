import { expect,it,describe } from "@jest/globals";
import { translateEnglishToMorse, decodeMorse} from "./main.js";



describe("get text and return a string of morse code representing its value", () => {

    it("Should return a new string of morse code", () => {
        //Write tests in here 
        const result = translateEnglishToMorse("hello world")
        expect(result).toBe(".... . .-.. .-.. ---  .-- --- .-. .-.. -..")
    });
    it("should return an error if the input does not match a valid string", () => {
        //Write tests in here 
        const result = translateEnglishToMorse( )
        expect(result).toBe("invalid input")
    });

    it("should lowercase all inputted text so it will match the saved values ", () => {
        //Write tests in here 
        const result = translateEnglishToMorse("HELLO WORLD")
        expect(result).toBe(".... . .-.. .-.. ---  .-- --- .-. .-.. -..")
    });
   
});


describe("get morse code and return a string of text representing its value", () => {

    it("Should return a new string of morse code", () => {
        //Write tests in here 
        const result = decodeMorse(".... . .-.. .-.. ---  .-- --- .-. .-.. -..")
        expect(result).toBe("hello world")
    });    
});