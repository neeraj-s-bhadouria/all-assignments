//Without using setInterval, try to code a counter in Javascript.

count = 0;

function counter() {
    console.log(count+=1);
    setTimeout(counter, 1000);
}

counter();
