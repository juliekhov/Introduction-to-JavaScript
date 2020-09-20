/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

/* use let not var as var allows you to re-declare */

let votingAge;
if(age > 18) {
    console.log(true);
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let num1 = 1, num2 = 3;

if(num2 < 10) {
    // Under this condition, we will increment or decrement num1 by 1.
    num1++;
} else {
    num1--;
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


let year = "1999";
parseInt(year);


//parseInt will return undefined if String not made out of digits

//Task d: Write a function to multiply a*b 

let a = 13, b = 7; 
function multiply (a, b) {
    let productNum;
    productNum = a * b;
    return productNum;
    //   return a * b;
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
let age = 18;

function calcDogYears(age) {
    return 7*age;
} 



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements:
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
let weight = 15, age = 1;  

function calcFeedDaily(weight, age) {
    if(age >= 1) {
        // First condition weight is up to 5 lb
        if(weight <= 5) {
            return 0.05*weight;
        }
        // Second condition weight is above 6 and below 10 lb
        else if(weight >= 6 && weight <= 10) {
            return 0.04*weight;
        }
        else if(weight >= 11 && weight <= 15) {
            return 0.03*weight;
        }
        else if (weight > 15) {
            return 0.02*weight;
        }
        else {
            return null;
        }

    }
    else if (age < 1) {
        if(age*12 < 2) {
            return null;
        }
        else if(age*12 >= 2 && age*12 <= 4) {
            return 0.10*weight;
        }
        else if(age*12 > 4 && age*12 <= 7) {
            return 0.05*weight;
        }
        else if(age*12 > 7 && age*12 <= 12) {
            return 0.04*weight;
        }
        else {
            return null;
        }
    }
}



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock, paper, or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
    let yourChoice = "rock";

  function findWinner(yourChoice) {
      // Math.random gives a random number between 0 and 1
      // Multiply by 10 to get a number between 0.23 or 1.5674 or 2.286 ... and 9.00017
      // Truncate and only keep the 0, 1, 2, 3, ..., or 9
      // Apply mod 3 to get remainders 0, 1, 2
      // Add 1 to get results of only 1, 2, 3 for R, P, S
      // So this method will produce a range of outputs, specifically 1, 2, 3
    let compChoice = Math.trunc(Math.random*10)) % 3 + 1;

    if (compChoice == 1) {
        compChoice = "rock";
    }
    else if (compChoice == 2) {
        compChoice = "paper";
    }
    else if (compChoice == 3) {
        compChoice = "scissors";
    }

    if (yourChoice == "rock" && compChoice == "rock") {
        return null;
    }
    else if (yourChoice == "rock" && compChoice == "scissors") {
        return "you won";
    }
    else if (yourChoice == "rock" && compChoice == "paper") {
        return "you lost";
    }
    else if (yourChoice == "scissors" && compChoice == "rock") {
        return "you lost";
    }
    else if (yourChoice == "scissors" && compChoice == "paper") {
        return "you won";
    }
    else if (yourChoice == "scissors" && compChoice == "scissors") {
        return null;
    }
    else if (yourChoice == "paper" && compChoice == "rock") {
        return "you won";
    }
    else if (yourChoice == "paper" && compChoice == "paper") {
        return null;
    }
    else if (yourChoice == "paper" && compChoice == "scissors") {
        return "you lost";
    }

  }
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

// mental plan:
// 0.621371 miles in 1 km
// km * mi / km ==> mi (km cancels)
// x km * 0.621371 mi / 1 km = 0.621371*x mi

function calcMiles(numKm) {
    return 0.621371*numKm;
}

let numKm = 5;
console.log(calcMiles(numKm));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
// mental plan:
// x ft * (12 in. / 1 ft) *( 2.54 cm / 1 in.)
// x*12*2.54

function calcCm(numFt) {
    return numFt*12*2.54;
}

//let numFt = 5;
//console.log(calcCm(numFt));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, 
// (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(numStart) {
    for(let i = numStart; i > 0; i--) {
        console.log(i +" bottles of soda on the wall, "+ i +" bottles of soda, take one down, pass it around ");
        i--;
        console.log(i +" bottles of soda on the wall");
        i++;
    }
}

// let numStart = 99;
// annoyingSong(numStart);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corresponding letter grade 
//90s should be A 
//80s should be B 
//70s should be C 
//60s should be D 
//and anything below 60 should be F

function calcGrade(mark) {
    if(mark >= 90){
        return "A";
    } else if(mark >= 80 && mark < 90) {
        return "B";
    } else if(mark >= 70 && mark < 80) {
        return "C";
    } else if(mark >= 60 && mark < 70) {
        return "D";
    } else if(mark >= 50 && mark < 60) {
        return "F";
    } else if (mark >= 0 && mark < 50) {
        return "You can always message your TL on slack! Practice makes perfect!";
    } else {
        return "Not a valid mark.";
    }
}
  
// let mark = 87;
// calcGrade(mark);
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

// mental strategy:
// Use string as an array, and a loop to check each position
// if the character is either a or A, e or E, i or I, o or O, u or U then count it as a vowel 

// parameter taken into findNumVowels function is the string defined prior to the function call on line 287 within the console log statement
function findNumVowels(msg) {
    // counter for the number of vowels in string
    let vowels = 0;
    // for loop checks the 0th character through one less than the total number of characters in string
    for(let i = 0; i < msg.length; i++) {
        // use conditional to check for vowels in the string called msg
        if(msg[i] == 'a' || msg[i] == 'A' || msg[i] == 'e' || msg[i] == 'E' || msg[i] == 'i' || msg[i] == 'I' 
                         || msg[i] == 'o' || msg[i] == 'O' || msg[i] == 'u' || msg[i] == 'U') {
            // increment counter
            vowels++;
        }
    }
    // after for loop return value of vowels counter
    return vowels;
}

// to run code must have defined string
//let msg = "Hello, portfolios are hard.";
// call function in console log statement to print the number being returned
//console.log(findNumVowels(msg));


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Scissors further
//update your rock, paper, scissors code below to take a prompt from a user using the window object

/*<h2>Rock, Paper, Scissors</h2>

<button onclick="myFunction()">What will you choose?</button>

<p id="rps"></p>

use window prompt method */

function findWinner() {
    
    let yourChoice = prompt("Enter rock, paper, scissors: ");
    // Math.random gives a random number between 0 and 1
    // Multiply by 10 to get a number between 0.23 or 1.5674 or 2.286 ... and 9.00017
    // Truncate and only keep the 0, 1, 2, 3, ..., or 9
    // Apply mod 3 to get remainders 0, 1, 2
    // Add 1 to get results of only 1, 2, 3 for R, P, S
    // So this method will produce a range of outputs, specifically 1, 2, 3
  let compChoice = Math.trunc(Math.random*10)) % 3 + 1;

  if (compChoice == 1) {
      compChoice = "rock";
  }
  else if (compChoice == 2) {
      compChoice = "paper";
  }
  else if (compChoice == 3) {
      compChoice = "scissors";
  }

  if (yourChoice == "rock" && compChoice == "rock") {
      return null;
  }
  else if (yourChoice == "rock" && compChoice == "scissors") {
      return "you won";
  }
  else if (yourChoice == "rock" && compChoice == "paper") {
      return "you lost";
  }
  else if (yourChoice == "scissors" && compChoice == "rock") {
      return "you lost";
  }
  else if (yourChoice == "scissors" && compChoice == "paper") {
      return "you won";
  }
  else if (yourChoice == "scissors" && compChoice == "scissors") {
      return null;
  }
  else if (yourChoice == "paper" && compChoice == "rock") {
      return "you won";
  }
  else if (yourChoice == "paper" && compChoice == "paper") {
      return null;
  }
  else if (yourChoice == "paper" && compChoice == "scissors") {
      return "you lost";
  }

}

