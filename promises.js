

// let p = new Promise((resolve,reject)=>{
//     let i=1+1
//     if(i==21){
//         resolve("correct")
//     }
//     else{
//         reject("wrong")
//     }
// })
// p.then((message)=>{
//     console.log(" 1. "+message);
// }).catch((message)=>{
//     console.log("2."+message);
// })





let q = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let sum=0;
        for(let i=0;i<100000;i++){
            sum += i;
        }
    resolve(sum);
    reject()
    })
},90000)
q.then((message)=>{
    console.log("sucess "+message);
}).catch(()=>{
    console.log("error");
})
console.log("======")