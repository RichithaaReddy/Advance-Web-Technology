const a=false
const b=false
function display(message1,message2){
    if(a){
        message1({
            namee:"one",
            val:"1"
        })
    }
    else if(b){
        message1({
            namee:"two",
            val:"2"
        })
    }
    else{
        message2("end")
    }
}

 display((message1)=>{
    console.log("message1 ="+message1.namee+" "+message1.val);
},(message2)=>{console.log("message2 ="+message2)})