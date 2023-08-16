let fiss = " "
for (let i = 1; i <=100; i ++){
  console.log(i)
  if ( i % 3 == 0 && i % 5 ==0){
    fiss += "fissbuss"
    console.log("fissbuss")
  }
  if (i % 3 == 0){
    fiss += "fiss"
    console.log("fiss")
  }
  if (i % 5 == 0){
    fiss += "buss"
    console.log("buss")
  }
}