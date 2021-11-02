// Bài 1
function randomScore(mark) {
    let result;
    if(mark >= 85) {
        result = 'A'
    }else if(mark >= 70 && mark < 85) {
        result = 'B'
    }else if(mark >= 40 && mark < 70) {
        result = 'C'
    }else {
        result = 'D'
    }
    document.writeln(result + "</p>")
}
randomScore(Math.floor(Math.random() * 101))

// Bài 2
function randomDay() {
let day = Math.floor(Math.random() * 6)
switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.writeln(day + "</p>")
}
randomDay()

// bài 3
function randomNumber(min, max) {
    document.write(Math.floor(Math.random() * (max - min + 1) + min) + "</p>")
}
randomNumber(2, 17)

// Vòng lặp
// Bài 1
function sumOdd() {
    let sum = 0
for(let i = 0; i <= 100; i++) {
    if(i % 2 != 0) {
        sum += i;
        }
    }
    document.write(sum + "</p>")
}
sumOdd()

//  Bài 2

function sum() {
    let sum = 0;
    for(let i = 0; i <= 100; i++) {
        if(i % 3 == 0 &&  i % 5 == 0) {
            sum += i;
        }
    }
    document.write(sum)
}
sum()


