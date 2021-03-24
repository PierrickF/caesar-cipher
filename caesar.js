apply.addEventListener("click", function () {                           // when the user clicks the Apply button
    let key = getInputValue();                                          // get the value they entered in the field
    let sentence = document.getElementById("text").innerHTML;           // get the text currently displayed
    let newText = caesar(sentence, key);                                // use these two values to run the cipher
    document.getElementById("text").innerHTML = newText;                // update the text on screen
});

function getInputValue() {
    let inputValue = Number(document.getElementById("inputValue").value);
    return inputValue;
}

function caesar(sentence, key) {

    let alphabetLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    let alphabetCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    let unicodeLow = []                                             // array of unicodes for small letters
    let unicodeCap = []                                             // array of unicodes for capital letters

    for (const smallLetter of alphabetLow) {                        // fill unicodeLow
        unicodeLow.push(smallLetter.charCodeAt());
    }

    for (const capLetter of alphabetCap) {                          // fill unicodeCap
        unicodeCap.push(capLetter.charCodeAt());
    }

    originalArray = []                                              // this block converts a string to a unicode array
    for (let i = 0; i < sentence.length; i++) {
        originalArray.push(sentence.charCodeAt(i));
    }

    if (key > 0) {

        newArray = []                             // values converted back from unicode to string will go in this array

        for (const j of originalArray) {                            // for each unicode value in original Array

            if (String.fromCharCode(j).match(/[a-z]/)) {            // if the converted value is a small letter
                let index = unicodeLow.indexOf(j);                  // find its index in unicodeLow
                let shifter = index + key + 1;                  // compute how far to go in a loop to get the new value

                let shifted = 0;                                    // the new value will go in this variable

                for (let k = 0; k < shifter; k++) {                 // loop until reaching the new unicode
                    shifted = unicodeLow[k%unicodeLow.length];      // this line allows looping nultiple times  
                }

                newArray.push(shifted);                             // add this value to the new array
            }

            else if (String.fromCharCode(j).match(/[A-Z]/)) {       // if the converted value is a capital letter
                let index = unicodeCap.indexOf(j);                  // find its index in unicodeCap
                let shifter = index + key + 1;                  // compute how far to go in a loop to get the new value

                let shifted = 0;                                    // the new value will go in this variable

                for (let k = 0; k < shifter; k++) {                 // loop until reaching the new unicode
                    shifted = unicodeCap[k%unicodeCap.length];      // this line allows looping nultiple times  
                }

                newArray.push(shifted);                             // add this value to the new array
            }

            else {                                                  // if the converted value is not a letter
                newArray.push(j);                                   // do not shift it
            }
        }
        return String.fromCharCode.apply(null, newArray);
    }

    else if (key < 0) {

        key *= -1;
        let uniLowRev = unicodeLow.reverse();
        let uniCapRev = unicodeCap.reverse();

        newArray = []                             // values converted back from unicode to string will go in this array

        for (const j of originalArray) {                            // for each unicode value in original Array

            if (String.fromCharCode(j).match(/[a-z]/)) {            // if the converted value is a small letter
                let index = uniLowRev.indexOf(j);                   // find its index in unicodeLow
                let shifter = index + key + 1;                  // compute how far to go in a loop to get the new value

                let shifted = 0;                                    // the new value will go in this variable

                for (let k = 0; k < shifter; k++) {                 // loop until reaching the new unicode
                    shifted = uniLowRev[k%uniLowRev.length];        // this line allows looping nultiple times  
                }

                newArray.push(shifted);                             // add this value to the new array
            }

            else if (String.fromCharCode(j).match(/[A-Z]/)) {       // if the converted value is a capital letter
                let index = uniCapRev.indexOf(j);                   // find its index in unicodeCap
                let shifter = index + key + 1;                  // compute how far to go in a loop to get the new value

                let shifted = 0;                                    // the new value will go in this variable

                for (let k = 0; k < shifter; k++) {                 // loop until reaching the new unicode
                    shifted = uniCapRev[k%uniCapRev.length];        // this line allows looping nultiple times  
                }

                newArray.push(shifted);                             // add this value to the new array
            }

            else {                                                  // if the converted value is not a letter
                newArray.push(j);                                   // do not shift it
            }
        }
        return String.fromCharCode.apply(null, newArray);
    }

    else if (key == 0) {                                            // do nothing if key is 0
        return sentence;
    }
}
