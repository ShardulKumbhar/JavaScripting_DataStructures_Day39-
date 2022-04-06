/*
creating an array
*/
let randomNum = [];
    /*adding 10random 3digit number to it */
    for (var i = 0; i < 10; i++) {
        randomNum[i] = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }
   
     /*printing array*/
     console.log(randomNum);

     //sorted by sort function
     console.log("Sort: " + randomNum.sort());
     console.log("2nd maximum: " + randomNum[randomNum.length - 2] + "\n2nd minimum: " + randomNum[1]);
            