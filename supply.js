function calculateSupply(age,amountperday){
  return age*amountperday*365
}
console.log("you will need "+(calculateSupply(90,7))+" until the ripe old age of 90")