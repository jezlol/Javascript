let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

let commonElements = [];

for (let jez = 0; jez < values1.length; jez++ ){
    let item = values1[jez];
    if (values2.indexOf(item) === values3 || values3.indexOf(item) !== 1){
        commonElements.push(item);
    }
}
console.log(commonElements);

