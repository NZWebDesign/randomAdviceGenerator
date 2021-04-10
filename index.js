const readline = require("readline");
const fs = require("fs");

//Assigns the text file to a variable
let goodOne = "./goodOne.txt";
let goodTwo = "./goodTwo.txt";
let goodThree = "./goodThree.txt";
let goodFour = "./goodFour.txt";
let goodFive = "./goodFive.txt";
let badOne = "./badOne.txt";
let badTwo = "./badTwo.txt";
let badThree = "./badThree.txt";
let badFour = "./badFour.txt";
let badFive = "./badFive.txt";

//Function to generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 5);
}

//The user menu
function welcome() {
  console.log("");
  console.log("");
  console.log("***********************************************");
  console.log("");
  console.log("Welcome to the random advice generator");
  console.log("");
  console.log("***********************************************");
  console.log("");
  console.log("");
  console.log("Looking for advice?  - You've come to the right console app!");
  console.log("");
  console.log("");
  console.log("Press 1 and ENTER for good advice");
  console.log("Press 2 and ENTER for bad advice");
  console.log(
    "Press 3 and ENTER if you've received enough advice for now and are on your way... "
  );
  console.log("");

  pressEnter();
}

//This function happens when the user presses ENTER
function pressEnter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(" ", function (input) {
    rl.close();

    chosenAdvice(input);
  });
}

//This takes the input (1, 2 or 3) from the user. It then calls another function after a set time,- either good advice, bad advice, or EXIT the app.
function chosenAdvice(input) {
  userChose = input;

  if (input == 1) {
    console.log("");
    console.log("");
    console.log("Boring choice... You selected good advice... ");
    console.log("");
    console.log("Please wait while we retrieve your good advice");
    console.log("");
    console.log(
      "...and remember ... if you get the same advice twice, maybe it's because you aren't really taking the advice on board..."
    );
    console.log("");
    console.log("");
    setTimeout(function () {
      goodAdvice(input);
    }, 6000);
  } else if (input == 2) {
    console.log("");
    console.log("");
    console.log("Excellent choice... You selected bad advice... ");
    console.log("");
    console.log("Please wait while we retrieve your bad advice");
    console.log("");
    console.log(
      "...and remember ... if you get the same advice twice, maybe it's because you aren't really taking the advice on board..."
    );
    console.log("");
    console.log("");
    setTimeout(function () {
      badAdvice(input);
    }, 6000);
  } else if (input == 3) {
    console.log("");
    console.log("");
    console.log(
      "Thanks for choosing the random advive generator. Come back soon!! "
    );
    exit();
  }
}

//EXIT the random advice console app
function exit() {
  setTimeout(function () {
    process.exit();
  }, 2000);
}

//Gets the text files
function loadFile(path, callback) {
  fs.readFile(__dirname + "/data/" + path, "utf-8", (err, data) => {
    if (err) {
      print("error");
    } else {
      callback(data);
    }
  });
}

//Calls generateRandomNumber and assigns it to randomNumber. Loads the correct good advice text file based on the randomly generated number.
function goodAdvice() {
  let randomNumber = generateRandomNumber();
  // console.log("Random =", randomNumber);

  if (randomNumber == 0) {
    loadFile(goodOne, print);
    setTimeout(function () {
      welcome();
    }, 5000);
  } else if (randomNumber == 1) {
    loadFile(goodTwo, print);
    setTimeout(function () {
      welcome();
    }, 5000);
  } else if (randomNumber == 2) {
    loadFile(goodThree, print);
    setTimeout(function () {
      welcome();
    }, 5000);
  } else if (randomNumber == 3) {
    loadFile(goodFour, print);
    setTimeout(function () {
      welcome();
    }, 5000);
  } else if (randomNumber == 4) {
    loadFile(goodFive, print);
    setTimeout(function () {
      welcome();
    }, 5000);
  }
}

//Calls generateRandomNumber and assigns it to randomNumber. Loads the correct good advice text file based on the randomly generated number.
function badAdvice() {
  let randomNumber = generateRandomNumber();
  // console.log("Random =", randomNumber);

  if (randomNumber == 0) {
    loadFile(badOne, print);
    setTimeout(function () {
      welcome();
    }, 5000);
  } else if (randomNumber == 1) {
    loadFile(badTwo, print);
    setTimeout(function () {
      welcome();
    }, 5000);
  } else if (randomNumber == 2) {
    loadFile(badThree, print);
    setTimeout(function () {
      welcome();
    }, 5000);
  } else if (randomNumber == 3) {
    loadFile(badFour, print);
    setTimeout(function () {
      welcome();
    }, 5000);
  } else if (randomNumber == 4) {
    loadFile(badFive, print);
    setTimeout(function () {
      welcome();
    }, 5000);
  }
}

//print function instead of console logging all the time....
function print(stuff) {
  console.log("\x1b[33m%s\x1b[0m", stuff);
  // console.log(stuff);
}

//Calls the welcome function to start the application
welcome();
