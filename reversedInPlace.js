let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
function reverseArrayInPlace(aV){

    //console.log(aV.length); 
    //console.log(arrayValue==aV);
    console.log(aV);
    let aVlength = aV.length;

    for (let i =  aVlength; i > 0; i--) {
    arrayValue.push(arrayValue[i-1]);
    //console.log(i + " i");
    //console.log(arrayValue);
    }
    //console.log(arrayValue.length);
    let aVl = arrayValue.length/2;
    for (let i = 1; i <= aVl; i++) {
        arrayValue.shift();
    }
    console.log(arrayValue);
}