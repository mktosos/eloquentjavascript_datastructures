console.log(arrayToList([10,20,30,40]));

function arrayToList(a){
    // obj=[];
    // //obj.push(a);
    // console.log(obj);
    // myCar = {};
    // var myCar = new Object();
    // myCar.value =a[2];
    // myCar.rest = null;

    // var myCar1 = new Object();
    // myCar1.value = a[1];
    // myCar1.rest = myCar;

    // var myCar2 = new Object();
    // myCar2.value = a[0];
    // myCar2.rest = myCar1;
       
    // return myCar2;

    //console.log(a.length);
    listArray = [];
    for (let i = a.length-1; i >= 0; i--) {
        const valueFromArray = a[i];
        var listObj = new Object();
        listObj.value= a[i];
        listObj.rest=listArray[a.length-2-i];
        //console.log("hello");
        listArray.push(listObj);
    }
    //console.log("hello");
    //return listObj;
    return listArray[a.length-1];
    return listArray;
}
//{value: 10, rest: {value: 20, rest: null}}