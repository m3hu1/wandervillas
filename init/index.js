const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  main().then(()=>{
    console.log("connected to mongodb");
  })
  const initDB=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"666ea03b6e020911598f3798"}))
    await Listing.insertMany(initData.
      data);
    console.log("data was initialised");
  };
  initDB();
  