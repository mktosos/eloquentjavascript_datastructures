// function range(start,end){
//     rangeArray=[];
//     for (let index = 0; index < end-start+1; index++) {
//         rangeArray.push(start + index);
//         }
//     return rangeArray;    
// }
//second range function with third "step" argument
function range(start,end,step){
    rangeArray=[];
    //if no third "step" arguement run normal itterate single increments 
    if (!step) {
        for (let index = 0; index < end-start+1; index++) {
            rangeArray.push(start + index);
            } 
            console.log(rangeArray);
    } else{
        //else if 3rd argument negative....
        if (Math.sign(step)==-1){
            for (let index = start; index > end-1; index=index+step) {
                rangeArray.push(index);
                } 
            console.log(rangeArray);
            return;
        }
        //increment additive by step
        for (let index = 0; index < end-start+1; index=index+step) {
            rangeArray.push(start + index);
            console.log(rangeArray);
            } 
        
    };
    return rangeArray; 
       
}
//second range function   *** end
function sum(){
    let total = 0;
    for (let index = 0; index < rangeArray.length; index++) {
        const element = rangeArray[index];
       total = total + element
   }
   return total;
}
console.log(sum(range(1,10)));
