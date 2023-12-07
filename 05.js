// {
//     // Attempting to log the value of the variable before assignment
//     console.log("Before assignment - letVariable:", letVariable); // output ==> Cannot access 'letVariable' before initialization

const { rejects } = require("assert")
const { report } = require("process")

//     // Variable declaration using let inside block scope
//     let letVariable = "I am using let";

//     // Logging the value after assignment
//     console.log("After assignment - letVariable:", letVariable); // output ==> After assignment - letVariable: I am using let
// }


const promiseONE = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
        resolve({username: "ragahw", class: "12th"})
        }else{
            reject("ERROR HERE")
        }
    },1000)
})  

promiseONE.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
})
