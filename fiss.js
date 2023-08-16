let fiss = " "
for (let i = 1; i <=100; i ++){
  console.log(i)
  if ( i % 3 == 0 && i % 5 ==0){
    fiss += "fizzbuss"
    console.log("fizzbuss")
  }
  if (i % 3 == 0){
    fiss += "fizz"
    console.log("fizz")
  }
  if (i % 5 == 0){
    fiss += "buss"
    console.log("buss")
  }
}