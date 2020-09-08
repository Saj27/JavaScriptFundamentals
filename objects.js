//function objectCreation()
//{
//var ourDog = 
//{
//"name" : "Camper", "legs" : 4, "tails" :1, "friends":["everything"]};
//}
//console.log(objectCreation);
//objectCreation();

//var testObj = 
//{
//"hat":"ballcap",
//"shirt":"jersy",
//"shoes":"cleats"
//};

//Assigning Values 
//var hatValue = testObj.hat;
//var shirtValue = testObj.shirt;

//SetUp
//var testObj =
 //{
//"an entree": "hamburger",
//"my side":"veggies",
//"the drink":"water"
 //}
 //var entreeValue = testObj["an entree"];

 // Changing the object names//
  //var myDog = 
  //{
    //"name" : "Camper", "legs" : 4, "tails" :1, "friends":["everything"]};
     //myDog.name = "Happy Coder";

//NESTED OBJECTS 
var myStorage = 
{
    "car":
    {
    "inside" :
    {
"glove box":"maps",
"passenger seat": "crumbs"

    },
    "outside": 
    {
     "trunk":"jack"

    }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

