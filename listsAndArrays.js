console.log(arrayToList([10,20]));

function arrayToList(a){
    // obj=[];
    // //obj.push(a);
    // console.log(obj);
    myCar = {};
    var myCar = new Object();
    myCar.value =a[1];
    //console.log(a[0]);
    myCar.rest = null;

    var myCar1 = new Object();
    myCar1.value = a[0];
    myCar1.rest = myCar;
       
    return myCar1;
}
//{value: 10, rest: {value: 20, rest: null}}