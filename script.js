////////////////////////////////////////
// Lecture: Hoisting
// calculateAge(1965);


// function calculateAge(year){
//     console.log(2018-year);
// }

// hoisting - //function declarations //notice that you can call a funttion even before the function is written because functions are stored in the variable object immediately
// /calculateAge(1990);/ 
// retirement(1965);
//hoisting- function expressions are not stored immediately like functions so you have to call them after. 
// var retirement = function(year){
//     console.log(65-(2018-year));
// }

// retirement(1990);


//////////VARIABLES////////

// console.log(age);
// var age = 23;
// console.log(age);

// function foo(){
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);













///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




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

// console.log(this);

// function calculateAge(year){
//     console.log(2018-year);
//     console.log(this);
// }

// calculateAge(1990);


var john = {
    name: 'John',
    year: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2018 - this.year);

        function innerFunction(){
            console.log(this);
        }
        // innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    year: 1984
};

mike. calculateAge = john.calculateAge;


mike.calculateAge();




