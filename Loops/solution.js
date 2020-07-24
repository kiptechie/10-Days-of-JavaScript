'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(str) {
    let n = str.length;
    for (let i = 0; i < n; i++) {
        if ((str[i] == "a") || (str[i] == "e") || (str[i] == "i") || (str[i] == "o") || (str[i] == "u")) {
            console.log(str[i]); //just to verify
        }
    }

    for (var j = 0; j < n; j++) {
        if ((str[j] == "a") || (str[j] == "e") || (str[j] == "i") || (str[j] == "o") || (str[j] == "u")) {
            // do nothing
        } else {
            console.log(str[j]); //just to verjfy constant
        }
    }

}


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}