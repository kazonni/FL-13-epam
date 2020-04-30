function getDifference(firstValue, secondValue){
  let isBigger = (firstValue, secondValue) => firstValue > secondValue;
  if(isBigger(firstValue, secondValue)){
    return firstValue - secondValue;
  } else{
    return secondValue - firstValue;
  }
}

getDifference(5, 3);
getDifference(5, 8);