///////////////////////////////////////
// Lecture: Hoisting
calculateAge(1965);


function calculateAge(year){
    console.log(2018-year);
}

// hoisting - //function declarations //notice that you can call a funttion even before the function is written because functions are stored in the variable object immediately
/calculateAge(1990);/ 
retirement(1965);
//hoisting- function expressions are not stored immediately like functions so you have to call them after. 
var retirement = function(year){
    console.log(65-(2018-year));
}

// retirement(1990);


//////////VARIABLES////////















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









