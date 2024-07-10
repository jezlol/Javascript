const status = 500;

if (status === 200){
    console.log('OK!');
} else if (status === 400 || status === 500) {
    console.log('ERROR!');
} else {
    console.log('Unknown status');
}