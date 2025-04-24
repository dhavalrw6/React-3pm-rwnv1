let obj = {
    name:"Raj",
    age:34,
    print:function(){
        console.log(`Hello ${this.name}`);        
    }
};


Object.freeze(obj);

obj.name = "Dhaval";




console.log({...obj,name:"Dhaval"});

