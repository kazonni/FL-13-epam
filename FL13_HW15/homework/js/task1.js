function assign (obj, obj1, obj2){
  for (let attr in obj1) {
    if (obj1.hasOwnProperty(attr)) {
      obj[attr] = obj1[attr];
  }
  }
  for (let attr in obj2) {
    if (obj2.hasOwnProperty(attr)) {
      obj[attr] = obj2[attr];
    }
  }
  return obj;
}
