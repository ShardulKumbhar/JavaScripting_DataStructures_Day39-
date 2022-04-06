let numArray = [];

for (let i = 11; i <= 100; i++) {
    let num = i.toString();
    num = num.split("")
    console.log(num);
    if (num[0] == num[1])
        numArray.push(i);
}
console.log("Numbers with repeated digits are: " + numArray);
