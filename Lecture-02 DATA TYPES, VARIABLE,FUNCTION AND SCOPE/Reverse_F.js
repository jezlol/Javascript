function reverseString(value) {
    let reverseValue = "";
    
    value.split("").forEach((char) => {
        reverseValue = char + reverseValue;
    });

    return reverseValue;
}

console.log(reverseString("Reversed this"));