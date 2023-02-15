//synchronous
console.log("example of synchronous");
calculate();
console.log("calculating");
function calculate(){
    let sum=0
    for(let i=0;i<1000000;i++){
        sum += i;
    }
    console.log(sum);
}

// example of synchronous
// 499999500000
// calculating
// end


//====================================================================

//asynchronous

console.log("asynchronous");
setTimeout(()=>{console.log("hello")},2000)
console.log("bye");
// asynchronous
// bye
// hello


//====================================================================

//sync-asynch
console.log("sync-asynch");
setTimeout(()=>{
    let sum=0
    for(let i=0;i<100000;i++){
        sum += i;
    }
    console.log(sum);
},2000)
console.log("======")


//output for entire code
// sync-asynch
// ======
// hello
// 499999500000
