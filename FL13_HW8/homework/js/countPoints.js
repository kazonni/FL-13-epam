function countPoints(arrayOfGames){
  let result = arrayOfGames.reduce(function(accumulator, currentValue) {
    let points;
    let isBigger = (firstValue, secondValue) => Number(firstValue) > Number(secondValue);
    if(isBigger(currentValue[0], currentValue[2])){
      points = 3;
      } else if(currentValue[0] === currentValue[2]){
        points = 1;
      } else{
        points = 0;
      }
    return Number(accumulator) + points;
  }, 0);
  return result;
}

countPoints(['3:1','1:0','0:0','1:2','4:0','2:3','1:1','0:1','2:1','1:0']);