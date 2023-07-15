// writing a program to remove all extra spaces from a file and then re-write the text back to file.
//Thanks to this weird async nature of js, now my love for java and python is stronger than before.

const fs = require('fs');
const { resolve } = require('path');

const reading = async (fileName) => {
    return new Promise(resolve => {
        fs.readFile(fileName, (err, data) => {
            if(err) {
                return console.error(err);
            }
            resolve(data.toString());
        })
    })
}

async function result() {
    const data =  await reading('index.txt');
    removeExtraSpaces(data.toString(), 'index.txt');
    console.log(await reading('index.txt'));
}

function removeExtraSpaces(text, fileName) {
    text = text.replace(/\s+/g, ' ');
    console.log('text - '+text);
    fs.writeFile(fileName, text, (err, res) => {
        if(err) {
            return console.error(err);
        }
        console.log('Data written successfully');
    });
}

(async function() {
    await result();
})();
