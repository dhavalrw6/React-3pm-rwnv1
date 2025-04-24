let arr = [null,undefined,true, 1,"string",[1,2,3],{1:'a'},function print(){
    return "Hello..";    
}];

arr.forEach((val,idx)=>{
    console.log(arr[idx]);    
})


