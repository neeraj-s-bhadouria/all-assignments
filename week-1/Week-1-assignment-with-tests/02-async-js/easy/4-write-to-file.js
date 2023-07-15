/*
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

var fs = require('fs');

var statement = "I have no idea what to write.\nSo just gonna write anything cause it really doesn't matter, no one is gonna read anyway."

fs.writeFile('index.txt', statement, (err, data) => {
    if(err) {
        return console.error(err);
    }
    console.log('Data written successfully. Now opening file contents');
    
    fs.readFile('index.txt', (err, data) => {
        if(err) {
            return console.error(err);
        }
        console.log(data.toString());
    });
});