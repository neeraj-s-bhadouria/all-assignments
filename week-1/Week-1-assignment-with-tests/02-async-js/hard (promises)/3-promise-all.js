/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve();
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve();
        }, 2000);
    });
}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve();
        }, 3000);
    });
}

async function calculateTime() {
    const timeBefore = performance.now();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(function() {
        const timeAfter = performance.now();
        console.log(`Time taken to execute all methods are ${(timeAfter-timeBefore)/1000} seconds.`);
    });
}

(async function(){
    calculateTime();
})();