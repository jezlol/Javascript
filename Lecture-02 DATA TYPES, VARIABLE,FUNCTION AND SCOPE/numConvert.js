let num1 = '150';
let flo1 = '150';

console.log("Converting strings to integers");
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF'));

console.log("Converting strings to float");
console.log(parseFloat('1.25abc'));
console.log(parseInt(flo1));
console.log(parseFloat('ABC'));

console.log("More conversion Examples");
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

console.log(parseInt(`${1 + 1}`));

console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());