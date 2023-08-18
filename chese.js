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

