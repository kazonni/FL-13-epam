const MIN = 10;
const MAX = 20;

function convert(...values){
  for(let i = 0; i < values.length; i++){
    if(typeof values[i] === 'number'){
      values[i] = String(values[i]);
    } else{
      values[i] = Number(values[i])
    }
  }
  return values;
}

function executeforEach(array, func){
  for(let i = 0; i < array.length; i++){
    func(array[i]);
  }
}

function mapArray(array, func){
  let newArr = [];
  function push(item){
    if(typeof item === 'string'){
        item = Number(item);
    }
    newArr.push(func(item));
  }
  executeforEach(array, push);
  return newArr;
}

function filterArray(array, func){
  let newArr = [];
  function push(item){
    if(func(item)){
      newArr.push(item)
    }
  }
  executeforEach(array, push);
  return newArr;
}

function containsValue(array, value){
  let result = false;
  function check(item){
    if(item === value){
      result = true;
    }
  }
  executeforEach(array, check);
  return result;
}

function flipOver(string){
  let reversedString = '';
  let length = string.length;
  for(let i = 0; i < string.length; i++){
    reversedString += string[--length];
  }
  return reversedString;
}

function makeListFromRange(array){
  let lastNumber = array[1];
  let counter = array[0];
  let newList = [];
  if(counter > lastNumber){
    lastNumber = array[0];
    counter = array[1];
  }
  while(counter <= lastNumber){
    newList.push(counter++);
  }
  return newList;
}

function getArrayOfKeys(array, key){
  let newArr = [];
  function push(object){
    newArr.push(object[key]);
  }
  executeforEach(array, push);
  return newArr;
}

function substitute(array){
  function check(item){
    if(item > MIN & item < MAX){
      item = '*';
    }
    return item;
  }
  return mapArray(array, check);
}

function getPastDay(date, day){
  let pastDate = date;
  pastDate.setDate(pastDate.getDate() - day);
  return pastDate.getDate();
}

function formatDate(date){
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let hours = date.getHours();
  let minutes = date.getMinutes();

  day < MIN ? day = '0' + day : day;
  month < MIN ? month = '0' + month : month;
  hours < MIN ? hours = '0' + hours : hours;
  minutes < MIN ? minutes = '0' + minutes : minutes;

  let time = `${date.getFullYear()}/${month}/${day} ${hours}:${minutes}`;
  return time;
}



