//basic

// class Hello{
//     constructor(greet)
//     {
//         this.greet = greet;
//     }
    

// }

// const myHello = new Hello("good morning");
// console.log(myHello.greet);



//classess passing 2 para

// class color{
//     constructor(id,name){
//         this.id = id;
//         this.name = name;
//     }
// }

// const myColor = new color("1","red");
// console.log(myColor.id);


//subclass

class parent{
    constructor(id,namee){
        this.id = id;
        this.namee = namee;
    }
    show1(){
        return "id= "+this.id+" name= "+this.namee+" ";
    }
}

class child extends parent{
    constructor(id,namee,brand){
    super(id,namee);
    this.brand=brand;
    }
    show2(){
        return this.show1()+" brand"+this.brand+" ";
    }
}

const a = new parent("1","asd");
const b = new child("2","qwe","camel");
console.log(a.show1());
console.log(b.show2());
