
//function abd(){

    //console.log("Hi");
//}
//abd();

//function abc(){
    //console.log("Hey");

//}
//abc();

//function numbersWithAgrs(a,b) 
//{
//console.log(a+b)
//}
//numbersWithAgrs(10,5);
//numbersWithAgrs();

//var outerWear = "Tee";
//function myOutfit()
//var outerWear = "Shirt";
//{
    //return outerWear;

//}
//console.log(myOutfit());
//console.log(outerWear);

function nextInLine(arr,item)
{
arr.push(item);
return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before:" + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After:" + JSON.stringify(testArr));
