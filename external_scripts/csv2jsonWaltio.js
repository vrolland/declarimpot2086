
const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('impots2021.csv');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const lineToKeep = [5, 6, 8, 9, 15, 16];

    let nbLine = 0;
    let nCession = 0;
    const final = new Array(100).fill([]);
    for await (const line of rl) {
        nbLine++;

        if(lineToKeep.includes(nbLine)) {
            const data = line.split(";");
            for(const i in data) {
                final[i] = final[i].concat([data[i]]);
            }
            
        }
    }

    console.log(JSON.stringify(final));
}

processLineByLine();
