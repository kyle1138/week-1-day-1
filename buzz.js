var pop = process.argv[2]

if ((pop%3 == 0) && (pop%5 == 0)){
  console.log("fizzbuzz")
}
else if(pop%3 == 0){
  console.log("fizz")
}
else if(pop%5 == 0){
  console.log("buzz")
}
else{
  console.log(pop)
};
