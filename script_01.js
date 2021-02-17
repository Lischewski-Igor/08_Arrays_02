
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."
// "Q" (question) --> "?"
// "E" (exclamation) --> "!"


/*** Funktion mit Array als Parameter */
// mögliche Tests:
// ausgabe(getSentence("Ich","bin","Peter","S"));
// ausgabe(getSentence(["Bist","du","Peter"],"Q"));
// ausgabe(getSentence(["Ich","bin"],"E"));
// ausgabe(getSentence(["Ich","bin"],"Ekhkjhjk"));

let arr = ["Ich","bin","Peter"];
ausgabe(getSentence(arr));

function getSentence(op, S, Q, E) {
    

    switch (op) {
        case ".":
            return sentence(S);
        case "?":
            return question(Q);
        case "!":
            return exclamation(E);

        default:
            return "Irgendwas ging schief!";
    }
}

function sentence(S){
    return S;
}


function getSentenceArr(arr) {
    let gap = " ";
    let sentence = ".";
    let question = "?";
    let exclamation = "!";
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        if (i != (arr.length-1)) {
            str += arr[i] + gap;
        } else if (let i = 0; i < arr.length; i++) {
            str += arr[i] + sentence;
        }  
    }
    return str;
}


function ausgabe(outputStr) {
    console.log(outputStr);
}