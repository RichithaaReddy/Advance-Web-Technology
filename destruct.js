// const person = ["1","ri","it"];
// const [rno,namee,dep] = person;

// console.log(person);   //[ '1', 'ri', 'it' ]


//obj
const color={
    cname:'red',
    id :'122'

}
display(color);

function display({cname:n,id}){
    const msg = 'my fav clr is '+n+' id is '+id+'.';
    console.log(msg);
}


//function
const [add,sub,mul,div]  = calculate(3,2); //giving that array helps to print values out of functn
function calculate(a,b){
    const add = a+b;
    const sub = a-b;
    const mul = a*b;
    const div = a/b;
    console.log(' '+add+','+sub+','+mul+','+div+'.');
    return [add,sub,mul,div]
}
console.log(add);


// const marks = [99,89,96,85,74,68]
// const [...all] = marks
// console.log(..all)


const a =[1,2,3,45,5];
const b= [2.3,4,67]
const c = [...a,...b];
console.log(c);

const[one,two,...rest]=a; //a =[1,2,3,45,5];
console.log(...rest);