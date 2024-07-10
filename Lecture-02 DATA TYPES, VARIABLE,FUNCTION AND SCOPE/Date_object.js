const start = Date.now();

console.log('start timer...');

setTimeout(() => {
    const millis = Date.now() - start;

    console.log(`seconds eplabsed = ${Math.floor(millis / 1000)}`);
}, 2000);