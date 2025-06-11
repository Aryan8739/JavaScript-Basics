const coding = ["js", "ruby", "java"];

coding.forEach( function (item) {      // Normal call back fuction
    console.log(item);
    
})

coding.forEach( (item)=> {      //arrow Fuction
    console.log(item);
})

function printme(item) {
    console.log(item);
    
    
}
coding.forEach(printme)   //no exectutiom () only refrence...!

coding.forEach( (item , index , arr)=> {
    console.log(item , index , arr);
    
})

const myCoding = [
    { languageName: "JavaScript", languageFileName: "js" },
    { languageName: "Python", languageFileName: "py" },
    { languageName: "Java", languageFileName: "java" }

];

myCoding.forEach ( (item) => {
    console.log(item.languageFileName);
    
});