const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/xenonstackRegistration",{
   
}).then(()=>{
    console.log(`it is connected perfectly`);
}).catch((e)=>{
    console.log(`no connection`);
})