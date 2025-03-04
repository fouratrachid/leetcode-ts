// Last updated: 3/5/2025, 12:46:58 AM
type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
     let currentIndex = 0;

 for (let i = 0; i < arr.length; i++) {
   if (fn(arr[i], i)) {
     arr[currentIndex] = arr[i];
     currentIndex++;
   }
 }

 arr.length = currentIndex;
 return arr
}
