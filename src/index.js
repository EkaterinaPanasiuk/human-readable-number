module.exports = function toReadable(number) {
    const letterNumber = {
        0: "zero",
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
    let num = Array.from(String(number));
    function simple(number) {
        for (let key in letterNumber) {
            if (Number(number) === Number(key)) {
                return letterNumber[key];
            }
        }
    }
    switch (true) {
        case num.length === 1:
            return simple(num[0]);
            break;
        case (num.length === 2 && number % 10 === 0) || number < 20:
            {
                return simple(number);
            }
            break;
        case num.length === 2 && number % 10 !== 0 && number > 20:
            {
                let tens = parseInt(number / 10);
                let first = simple(tens + "0");
                let second = simple(num[1]);
                return first + " " + second;
            }
            break;
        case num.length === 3 && number % 100 === 0:
            {
                return simple(num[0]) + " " + "hundred";
            }
            break;
        case num.length === 3 && number % 10 === 0:
            {
                let tens = num[1];
                let hundreds = num[0];
                return (
                    simple(hundreds) +
                    " " +
                    "hundred" +
                    " " +
                    simple(tens + "0")
                );
            }
            break;
        case num.length === 3 && number % 10 !== 0:
            {
                let hundreds = num[0];
                let tens = num[1];
                if (tens < 2) {
                    return (
                        simple(hundreds) +
                        " " +
                        "hundred" +
                        " " +
                        simple(num[1] + num[2])
                    );
                } else {
                    let ones = num[2];
                    return (
                        simple(hundreds) +
                        " " +
                        "hundred" +
                        " " +
                        simple(tens + "0") +
                        " " +
                        simple(ones)
                    );
                }
            }
            break;
    }
};
