//For 
for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

for (let i = 0; i <=10; i++) {
    // console.log(`Outer loop value :${i}`);
    for (let j = 0; j<=10 ; j++ ){
        // console.log(`Inner loop value: ${j} And Outer loop ${i}`)
        // console.log(i + "*" + j + "=" + i*j)
    }
}
// break nd continue

for (let i = 1; i<=20 ; i++){
    if (i==5){
        console.log("Detected 5")
        break;
    }
    console.log(`value of i is ${i}`)
    
}

//continue skip the iteration one time!!!!
