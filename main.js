//returns random number between
let t = "";
let streakCounter = 0;
function tooRandomEasy() {
  return Math.floor(Math.random() * 11);
}
function tooRandomMid() {
  return Math.floor(Math.random() * 51);
}
function tooRandomHard() {
  return Math.floor(Math.random() * 100);
}
//compare two numbers
function compare(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  console.log(typeof a);
  console.log(typeof b);
  if (a > b) {
    return true;
  } else if (b > a) {
    return false;
  }
}
//inserts to html takes two ints
function loadNums(numOne, numTwo) {
  document.querySelector("#num1").innerHTML = numOne;
  document.querySelector("#num2").innerHTML = numTwo;
}
//loadNums(22,2);
//setting events
document.querySelector("#easy").addEventListener("click", function() {
  t = "e";
  document.querySelector("#results p").innerHTML = "";
  loadNums(tooRandomEasy(), tooRandomEasy());
});
//
document.querySelector("#mid").addEventListener("click", function() {
  t = "m";
  document.querySelector("#results p").innerHTML = "";
  loadNums(tooRandomMid(), tooRandomMid());
});
document.querySelector("#hard").addEventListener("click", function() {
  t = "h";
  document.querySelector("#results p").innerHTML = "";
  loadNums(tooRandomHard(), tooRandomHard());
});
document.querySelector("#opt1").addEventListener("click", function() {
  document.querySelector("#results p").innerHTML = "";
  let c = compare(
    document.querySelector("#num1").innerHTML,
    document.querySelector("#num2").innerHTML
  );
  console.log(c);
  if (c) {
    console.log("you are correct");
    streakCounter++;
    document.querySelector("#results p").innerHTML = "You are correct";
  } else {
    streakCounter = 0;
    console.log("you are wrong");
    document.querySelector("#results p").innerHTML = "You are wrong";
  }
      document.querySelector('#results #totalCo').innerHTML=`Streak ${streakCounter}`;
  if (t == "e") {
    loadNums(tooRandomEasy(), tooRandomEasy());
  } else if (t == "m") {
    loadNums(tooRandomMid(), tooRandomMid());
  } else if (t == "h") {
    loadNums(tooRandomHard(), tooRandomHard());
  }
});
//
document.querySelector("#opt2").addEventListener("click", function() {
  let c = compare(
    document.querySelector("#num1").innerHTML,
    document.querySelector("#num2").innerHTML
  );
  console.log(c);
  if (!c) {
    console.log("you are correct");
    streakCounter++;
    document.querySelector("#results #res").innerHTML = "You are correct";
  } else if (c) {
    streakCounter = 0;
    console.log("you are wrong");
    document.querySelector("#results #res").innerHTML = "You are wrong";
  }
      document.querySelector('#results #totalCo').innerHTML=`Streak ${streakCounter}`;
  if (t == "e") {
    loadNums(tooRandomEasy(), tooRandomEasy());
  } else if (t == "m") {
    loadNums(tooRandomMid(), tooRandomMid());
  } else if (t == "h") {
    loadNums(tooRandomHard(), tooRandomHard());
  }
});
