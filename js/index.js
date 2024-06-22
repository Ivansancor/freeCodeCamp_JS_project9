const inputElement = document.getElementById("searchbar");
const buttonElement = document.getElementById("button");
const resultElement = document.querySelector("#result");

const validateInput = word => {
    let validatedWord;
    //validating input field
    if (word === "") {
        alert("Please provide a word to check");
        validatedWord = null;
    }
    //cleaning input
    validatedWord = word.replace(/^(\W|_)*|(\W|_)*$/gi, "");
    validatedWord = validatedWord.replace(/(\W|_)/gi, " ");
    return validatedWord;
}

const compareInput = word => {
    const validWord = validateInput(word);
    // check against its reverse self
    if (validWord) {
        const resultCheck = (validWord.toLowerCase() === validWord.toLowerCase().split("").reverse().join("")) ? true : false;
        
        //rendering result
        resultElement.style.display = "block";
        resultElement.innerHTML = `<span style="font-weight: bold">${validWord}</span> is ${resultCheck ? "" : "not"} a palindrome.`;
        
        //clearing input for next word
        inputElement.value= "";
    }
}

buttonElement.addEventListener("click", () => compareInput(inputElement.value));

inputElement.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        compareInput(inputElement.value);
    } else return;
});