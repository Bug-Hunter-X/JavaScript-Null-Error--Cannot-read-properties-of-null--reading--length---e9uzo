function foo(x){
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined cases
  }
  return x.length; //Safe to access length now
}
//Alternative Solution using Optional Chaining
function foo(x) {
  return x?.length || 0; //If x is null or undefined, return 0 otherwise return x.length
}