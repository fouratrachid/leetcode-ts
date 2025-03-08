// Last updated: 3/8/2025, 4:49:45 AM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
 // a comment to explain rest paramter , spread 

//If you are passing values to something, it's spread -> examples: right side of assignment operator (=) or arguments passed to a function
//If you are receiving values from somewhere, it's rest -> examples: left side of assignment operator (=) or parameters received in a function
//To explain via code,
//This is REST:
//const myFunction = function(...arr){         //Here `arr` is received in the function (i.e. arr is the parameter to the function), so it's REST
    //do Something
//}
//This is SPREAD:
//const arr = [1,2,3];
//myFunction(...arr);         //Here we are passing `arr` to the functions (i.e. arr is the parameters passed to the function), so it's SPREAD
function argumentsLength(...args: JSONValue[]): number {
    return args.length ; 
};

/**
 * argumentsLength(1, 2, 3); // 3
 */