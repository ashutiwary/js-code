// Immediately Invoked Function Expression (IIFE)

// Below one is Named IIFE
( function one(){
    console.log(`DB Connected`);
})();


// Below one is Simple IIFE
( (name)=>{
    console.log(`DB CONNECTED ${name}`);
}
)('Ashu')