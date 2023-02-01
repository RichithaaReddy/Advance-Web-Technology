//let cant be redeclared
// let a = 5;
// let a=10;
// console.log(a);


//Let scope is block level
// let a=5
// function hello(){
//     let a=10;
//     console.log("va",a); //10
// }
// hello();
// console.log(a);//5

//----------------------------------------------------------------------------------------

//var can be redeclared
// var a=5;
// var a=10;
// console.log(a);//10



// var and var in funtn
// var a=5;
// function hello(){
//     var a=10;
//     console.log(a); //10
// }
// hello();
// console.log(a); //5

//------------------------------------------------------------------------------------------

//let-var


//let cant be redeclared 
// let a=5;
// var a=10;
// console.log(a);


//let cant be redeclared as it is declared in var
// var a=5;
// let a=10;
// conole.log(a);

//------------------------------------------------------------------------

//const

//cant be redeclared
// const a=10;
// const a=11;

//can be redeclared in function
// const a=10;
// function hello(){
//     const a=15;
//     console.log(a);  //15
// }
// hello();
// console.log(a); //10



//const-var can redeclared in block
// const a=10;
// function hello(){
//     var a=15;
//     console.log(a);  //15
// }
// hello();
// console.log(a); //10


//const-let can redeclared in block
// const a=10;
// function hello(){
//     let a=15;
//     console.log(a);  //15
// }
// hello();
// console.log(a); //10


//let-const can redeclared in block
// let a=10;
// function hello(){
//     const a=15;
//     console.log(a);  //15
// }
// hello();
// console.log(a); //10

//var-const can redeclared in block
// var a=10;
// function hello(){
//     const a=15;
//     console.log(a);  //15
// }
// hello();
// console.log(a); //10

//---------------------------------------------------------------------------------------
//for

//var in for loop continuos output after function
// var i=10;
// for(var i=0;i<5;i++){
//     console.log(i);  //0 1 2 3 4 
// }
// console.log(i); //5

//let in for loop = o/p not continuos
// let i=10;
// for(let i=0;i<5;i++){
//     console.log(i);  //0 1 2 3 4 
// }
// console.log(i); //10


//const in for loop=error
// const i=10;
// for(const i=0;i<5;i++){
//     console.log(i);   
// }
// console.log(i); // const var error


//let and var in for loop
// let i=10;
// for(var i=0;i<5;i++){
//     console.log(i);  
// }
// console.log(i); //Identifier 'i' has already been declared


//var and let in for loop
// var i=10;
// for(let i=0;i<5;i++){
//     console.log(i);  // 0 1 2  3 4 
// }
// console.log(i); //10


//const and var in for loop
// const i=10;
// for(var i=0;i<5;i++){
//     console.log(i);  
// }
// console.log(i); //error =declared already



//const and let in for loop
// const i=10;
// for(let i=0;i<5;i++){
//     console.log(i);  // 0 1 2  3 4 
// }
// console.log(i); //10



// //let and const in for loop
// let i=10;
// for(const i=0;i<5;i++){
//     console.log(i);  
// }
// console.log(i); //error


//var and const in for loop
var i=10;
for(const i=0;i<5;i++){
    console.log(i);  
}
console.log(i); //error