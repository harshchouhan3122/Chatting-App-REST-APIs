// Write code to initialize the DB at starting


// .env file integration
if (process.env.NODE_ENV != "production"){
    require('dotenv').config();                 // Ensure you load environment variables from .env file
}

const dbURL = process.env.ATLASDB_URL;
// const dbURL = "mongodb+srv://harshchouhan:harshMongo@cluster0.unba4.mongodb.net/chattingAppDB?retryWrites=true&w=majority&appName=Cluster0";



// Connect DB
const mongoose = require("mongoose");

// Connect Model
const Chat = require("./models/chat.js");


// Connect to the Database
async function main() {
    try {
        await mongoose.connect(dbURL);
        console.log("Connected to DB....");
    } catch (err) {
        console.error("Database connection error:", err);
    }
}

main();

// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "Hello priya",
//     created_at: new Date()      //UTC Time format
// });

// chat1.save().then(res => console.log(res)).catch(err => console.log(err))

// Chat.insertMany([
//     {
//         from: "neha",
//         to: "priya",
//         msg: "Hello priya",
//         created_at: new Date()      //UTC Time format
//     },
//     {

//     }
// ]);


const initDB = async () => {
    // Delete the existing DB
    await Chat.deleteMany({});

    let allChats = [
        {
            from: "neha",
            to: "priya",
            msg: "Hello priya",
            created_at: new Date() 
        },
        {
            from: "mohit",
            to: "rohit",
            msg: "Hello rohit",
            created_at: new Date() 
        },
        {
            from: "priya",
            to: "riya",
            msg: "Hello riya",
            created_at: new Date() 
        },
        {
            from: "Rohan",
            to: "Mohit",
            msg: "Mohit, How are You???",
            created_at: new Date() 
        },
        {
            from: "Mohit",
            to: "Rohan",
            msg: "Hello Rohan, I'm Fine",
            created_at: new Date() 
        },
        {
            from: "Harsh Bhaiya",
            to: "Rohan",
            msg: "Hello Rohan, I'm Fine",
            created_at: new Date() 
        },
    ];
    
    // Insert the modified data into the database
    Chat.insertMany(allChats);

    console.log("Data Initialized Successfully.....");

};

initDB();
