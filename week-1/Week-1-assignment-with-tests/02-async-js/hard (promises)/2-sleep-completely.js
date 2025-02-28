/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve();
        }, seconds);
    });
}

(async function(){
    console.log(new Date().toLocaleTimeString('it-IT'));
    await sleep(5000);
    console.log(new Date().toLocaleTimeString('it-IT'));
})();