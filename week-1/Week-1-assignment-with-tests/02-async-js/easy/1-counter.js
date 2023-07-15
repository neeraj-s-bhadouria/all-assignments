//Code a counter in Javascript.It should go up as time goes by in intervals of 1 second

count = 0;

setInterval(counter = () => {
    console.log(count+=1);
}, 1000);