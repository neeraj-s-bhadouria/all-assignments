/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

async function wait(n) {
    return new Promise(resolve => {
         setTimeout(function(){
            resolve(`${n/1000} seconds have been passed.`);
         }, n);
    })
}

(async function() {
    console.log(new Date().toLocaleTimeString('it-IT'));
    await wait(5000);
    console.log(new Date().toLocaleTimeString('it-IT'));
})();