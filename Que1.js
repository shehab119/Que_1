function customPrint(n, message)
 { //  Add your code here 
    Array.from({length: n},(x,t)=>{
        console.log(message)
    })
}  

customPrint(5, 'Hello, World!');