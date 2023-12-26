// Immediately Invoked Function Expresion (IIFE)
// ()() GLOBAL VARIABLE KE POLLUTION SE PROBLEM HOTI HAI KAI BAR UUSSE BACHANE KE LIYE IIFE USE KARTE HAI 

(function chai(){
    // NAME IIFE HAI
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWo ${name}`);
})('vaishnavii')  
