for(let p=0; p<100; p++){
  if((p+1)%2!=0){
    console.log(p)
  }
}


let x=10
if(x>7){
  console.log(10)
}

else{
  console.log(3)
}


let x=10
while(x<10){
  console.log (x=1)
  x++
}

let x=10
do()


function cheseboard(){
  let chese= " ";

  for(let x=1; x<=8; x++){
    for(let y=1; y<=8; y++){
      if( (x+y) %2 ===0){
        chese+= "* "
      }
      else{
        chese+= "+ "
      }

    }
    chese+= "\n"
  }
    console.log(chese)
  }
  (cheseboard())

