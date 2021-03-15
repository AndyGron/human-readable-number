module.exports = function toReadable (number) {
    const numbers = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let res = "";
    
    if (number === 0){
        return "zero";
      } 

    if (number >= 100){
        res += numbers[Math.floor(number / 100)] + " hundred ";
    } 

    if (number % 100 < 20) {
        res += numbers[number % 100];  
    } else {
        res += numbers[Math.floor((number % 100) / 10) * 10] + " ";

        if (number % 10){
            res += numbers[number % 10]; 
        }
    }

    return res.trim();
}

