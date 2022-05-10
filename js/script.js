// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>2000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 2000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `The sum of the digits of 2<sup>${num}</sup> is ${powerDigitSum(num)}`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the sum of the digits of the number 2^exponent
    powerDigitSum(15) returns 26
    powerDigitSum(1000) returns 1366
*/
function powerDigitSum(exponent) {
    const num = BigInt(Math.pow(2,exponent));
    const digits = num.toString().split('');
    return digits.reduce((sum,digit) => sum + parseInt(digit), 0);
}