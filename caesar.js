function caesar(sentence, key) {

    alphabetLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    alphabetCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    unicodeLow = []
    unicodeCap = []

    for (const smallLetter of alphabetLow) {                        // array of unicodes for small letters
        unicodeLow.push(smallLetter.charCodeAt());
    }

    for (const capLetter of alphabetCap) {                          // array of unicodes for capital letters
        unicodeCap.push(capLetter.charCodeAt());
    }

    // this block converts a string to a unicode array
    originalArray = []         
    for (let i = 0; i < sentence.length; i++) {
        originalArray.push(sentence.charCodeAt(i));
    }

    if (key > 0) {

        newArray = []                               // values converted back from unicode to string will go in this array

        for (const j of originalArray) {                            // for each unicode value in original Array

            if (String.fromCharCode(j).match(/[a-z]/)) {            // if the converted value is a small letter
                let index = unicodeLow.indexOf(j);                  // find its index in unicodeLow
                let keyer = index + key + 1;                    // compute how far to go in a loop to get the new value

                let keyed = 0;                                    // the new value will go in this variable

                for (let k = 0; k < keyer; k++) {                 // loop until reaching the new unicode
                    keyed = unicodeLow[k%unicodeLow.length];      // this line allows looping nultiple times  
                }

                newArray.push(keyed);                             // add this value to the new array
            }

            else if (String.fromCharCode(j).match(/[A-Z]/)) {       // if the converted value is a capital letter
                let index = unicodeCap.indexOf(j);                  // find its index in unicodeCap
                let keyer = index + key + 1;                    // compute how far to go in a loop to get the new value

                let keyed = 0;                                    // the new value will go in this variable

                for (let k = 0; k < keyer; k++) {                 // loop until reaching the new unicode
                    keyed = unicodeCap[k%unicodeCap.length];      // this line allows looping nultiple times  
                }

                newArray.push(keyed);                             // add this value to the new array
            }

            else {                                                  // if the converted value is not a letter
                newArray.push(j);                                   // do not key it
            }
        }
        return String.fromCharCode.apply(null, newArray);
    }

    else if (key < 0) {

        key *= -1;
        let uniLowRev = unicodeLow.reverse();
        let uniCapRev = unicodeCap.reverse();

        newArray = []                               // values converted back from unicode to string will go in this array

        for (const j of originalArray) {                            // for each unicode value in original Array

            if (String.fromCharCode(j).match(/[a-z]/)) {            // if the converted value is a small letter
                let index = uniLowRev.indexOf(j);                  // find its index in unicodeLow
                let keyer = index + key + 1;                    // compute how far to go in a loop to get the new value

                let keyed = 0;                                    // the new value will go in this variable

                for (let k = 0; k < keyer; k++) {                 // loop until reaching the new unicode
                    keyed = uniLowRev[k%uniLowRev.length];      // this line allows looping nultiple times  
                }

                newArray.push(keyed);                             // add this value to the new array
            }

            else if (String.fromCharCode(j).match(/[A-Z]/)) {       // if the converted value is a capital letter
                let index = uniCapRev.indexOf(j);                  // find its index in unicodeCap
                let keyer = index + key + 1;                    // compute how far to go in a loop to get the new value

                let keyed = 0;                                    // the new value will go in this variable

                for (let k = 0; k < keyer; k++) {                 // loop until reaching the new unicode
                    keyed = uniCapRev[k%uniCapRev.length];      // this line allows looping nultiple times  
                }

                newArray.push(keyed);                             // add this value to the new array
            }

            else {                                                  // if the converted value is not a letter
                newArray.push(j);                                   // do not key it
            }
        }
        return String.fromCharCode.apply(null, newArray);
    }

    else if (key == 0) {
        return sentence;
    }
}

function newKey () {
    document.getElementById("keyInput").value = key;
    apply.addEventListener("click", function () {
        caesar();
    });
}

sentence = "Hello, World!";
key = -5;
console.log(caesar(sentence, key));
