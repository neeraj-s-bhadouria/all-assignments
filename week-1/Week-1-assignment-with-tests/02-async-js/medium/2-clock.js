const currentTime = () => {
    var today = new Date();
    console.log(today.toLocaleTimeString('it-IT'));
    console.log(today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'}));
}

setInterval(currentTime, 1000);
