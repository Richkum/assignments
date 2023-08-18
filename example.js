// for(let p=0; p<100; p++){
//   if((p+1)%2!=0){
//     console.log(p)
//   }
// }


// let x=10
// if(x>7){
//   console.log(10)
// }

// else{
//   console.log(3)
// }


// let x=10
// while(x<10){
//   console.log (x=1)
//   x++
// }

// let x=10
// do()


// function min(x,y){
//   if(x > y){
//     return y
//   }
//   else{
//     return x
//   }
// }
// console.log(min(5,6))

function min(x,y,z){
  if(x > y && x > z){
    return x
  }
  else if(y > x && y > z){
    return y
  }
  return z
}
console.log(min(200,20,15))