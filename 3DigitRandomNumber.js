/*
creating an array
*/
let randomNum = [];
    /*adding 10random 3digit number to it */
    for (var i = 1; i <= 10; i++) {
        randomNum[i] = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }
   
     /*printing array*/
     console.log(randomNum);
            //let min = randomNum[0]
            //let max = randomNum[0]
let temp;

for (let i = 1; i < randomNum.length; i++) {
    for (let j = i + 1; j < randomNum.length; j++) {
        if (randomNum[i] > randomNum[j]) {
            temp = randomNum[i];
            randomNum[i] = randomNum[j];
            randomNum[j] = temp;
        }
    }
    console.log("Array: " + randomNum[i]);
}
console.log("2nd maximum: " + randomNum[randomNum.length - 2] + "\n2nd minimum: " + randomNum[2]);
