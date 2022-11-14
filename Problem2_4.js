// Problem 2.4: print the hexadecimal value of a positive integer

function HEX(number){
    let arr = number;
    let d1 = 0;
    let result = "";
    let letter = "ABCDEF";

    while(arr){
        if(arr%16 < 10){
            d1 = arr%16;
            result = d1 + result;
            arr = Math.floor(arr/16);
        }
        else {
            result = letter[(arr%16)-10] + result;
            arr = Math.floor(arr/16);
        }
    }
    return result;
}

module.exports = {
    HEX: HEX
}
