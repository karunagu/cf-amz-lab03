var user = prompt ('What is your Name?');
console.log ('User Name : ',user);
if (user === null){
    user = 'Guest';
}
alert('Hi '+ user +'! Thanks for visiting my home page');
var guess = prompt ('Are you ready to guess about me (Y/N)?');
console.log ('Guess (Y/N) : ', guess);
var correct = 0;
var total = 0;
if (guess === 'Y' || guess === 'y' ) {
    var drink = prompt ('What is my favorite Drink?');
    console.log ('Drinks : ', drink);
    total++;
    if (drink.toLowerCase() === 'pepsi'){
        alert ('Yes, You are correct, my favorite drink is '+ drink);
        correct++;
    }                   
    else {
        alert ('Sorry, it is incorrect!  Please try next guess')
    }
    var sports = window.prompt ('What is my favorite sports?');
    console.log ('Sports : ', sports);
    total++;
    if (sports.toLowerCase() === 'cricket'){
        alert ('Yes, you are correct, my favorite sports is '+ sports);
        correct++;
    }                   
    else {
        alert ('Sorry, it is incorrect!  Please try next guess')
    }
    var script_language = prompt ('What is my favorite scripting language?');
    console.log ('Scripting Language : ', script_language);
    total++;
    if (script_language.toLowerCase() === 'javascript'){
        alert ('Yes, you are correct, my favorite Scripting Language is '+ script_language);
        correct++;
    }                   
    else {
        alert ('Sorry, it is incorrect!  Please try next guess')
    }
    var experience = prompt ('What is my total years of experience?');
    console.log ('Experience : ', experience);
    total++;
    if (parseInt(experience) >= 10 && parseInt(experience) <= 15){
        alert ('Yes, you are correct, I have 10+ years of experience ');
        correct++;
    }                   
    else {
        alert ('Sorry, it is incorrect!')
    } 
    if (parseInt(correct) > 0) {
        alert('Hi '+ user +'! ' + (correct/total * 100) +' % of your guesses are correct' );
    }
    else {
        alert('Hi '+ user +'! Sorry, none of your guesses are correct, try again' );
    } 

    var fav_num;
    var numtimes = 1;

    while (fav_num !== 33) {
        fav_num = parseInt(prompt('Can you guess my favorite number?'));
    
    if (fav_num < 20) {                                     /* Too Low */
        alert('Sorry! You guessed too low!');
        numtimes++;
    } else if (fav_num >= 20 && fav_num < 33) {             /*  Low */
        alert('Sorry! You guessed low!');
        numtimes++;
    } else if (fav_num > 33 && fav_num < 53) {              /* High */
        alert('Sorry! You guessed high!');
        numtimes++;
    } else if (fav_num >= 53                 ) {             /*  Too High */
        alert('Sorry! You guessed Too high!');
        numtimes++;
    } else if (isNaN(fav_num) || fav_num === null) {
        alert('Please enter an actual number');
        numtimes++;
    }
}
    console.log('Total number of guesses until you got it:', numtimes);
    alert('Hi '+ user +'It took '+ numtimes+ ' guesses until you got it ');
}
else {
    alert('Hi '+ user +'! No problem, try again later');
}
