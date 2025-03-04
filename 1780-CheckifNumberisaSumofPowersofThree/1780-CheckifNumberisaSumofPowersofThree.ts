function checkPowersOfThree(n: number): boolean {
    // the function toString (n) returns the number in that base , for example here we want the ternanary 
    // representation so we passed 3 , and then we look if it contains 2 or not because the hint 2 says 
    // The number can not be represented as a sum of powers of 3 if it's ternary presentation has a 2 in it
    return !n.toString(3).includes("2");
};