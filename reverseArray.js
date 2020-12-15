function reverseArray(arrayToReverse){
    //console.log(arrayToReverse);
    reversedArray=[];
    for (let i = 0; i < arrayToReverse.length; i++) {
        reversedArray.unshift(arrayToReverse[i])
        
        
    }
    //console.log(reversedArray);
    return reversedArray;
};
console.log(reverseArray(["A","B","C"]));