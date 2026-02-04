import express from 'express';

const app = express();


app.get("/", (req, res) =>{

    console.log("GEt request received");
    res.send("<h1 style='color: purple'>Home</h1>");


});

app.get("/about", (req, res) =>{

    res.send("<h1 style='color: purple'>About</h1>");
});


app.get("/contact", (req, res) =>{

    res.send("<h1 style='color: purple'>Contact</h1>");
});




const port = 3000;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});