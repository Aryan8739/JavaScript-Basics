//For Im

const myObject ={
    js :"Javascript",
    rb : "Ruby",
    swift : "Swift  by apple" ,
  }

  for (const key in myObject) {
    console.log(`Key : ${key} & Value: ${myObject[key]}`);
  }

  const arr = [1,2,3,4,5];
  for (const key in arr) {
    console.log(`${key} : ${arr[key]}`);      
  }


  //Map is not iterable!!!!