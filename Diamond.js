const prompt = require('prompt-sync')();


let rows = prompt("Enter the width of the diamond: ");

for(let i = 1; i <= rows; i++){
    for(let space = rows; space > i; space--){
        process.stdout.write(" ")
    }

    for(let j = 1; j <= i; j++){
        process.stdout.write("* ")
    }
    console.log()
}

for(let i = rows - 1; i >= 1; i--){
    for(let space = rows; space > i; space--){
        process.stdout.write(" ")
    }

    for(let j = 1; j <= i; j++){
        process.stdout.write("* ")
    }
    console.log()
}