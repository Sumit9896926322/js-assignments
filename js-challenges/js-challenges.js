console.log(4 != 5);
console.log(6 != 3);
console.log(0 == 0);


for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        console.log("Multiple of 5");
    } else {
        console.log(i);
    }
}


var i = 1;
while (i <= 100) {
    if (i % 5 == 0) {
        console.log("Multiple of 5");
    } else {
        console.log(i);
    }
    i++;
}


var myName = "Jack";
var myAge = "22";
alert(" My name is " + myName + "and I am " + myAge + " years old ");




var age = prompt("Please enter your age");

if (age > 21) {
    alert("You are old enough to drink.");
} else {
    alert("No alcohol for you!");
}

//Sum of number from 1-100
var sumUpto100 = 0;
function numberAdder() {
    for (var i = 1; i <= 100; i++)
        sumUpto100 += i;
}
numberAdder();
console.log("Sum of number from 1 to 100 is " + sumUpto100);


//boxVolume
function boxVolume(length, width, height) {
    console.log("Volume of your box is " + length * width * height);
}
boxVolume(3, 4, 5);