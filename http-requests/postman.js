import express from 'express';

const app = express();

const port = 3001;


app.get("/", (req, res) =>{

    res.send("<h1 style='color: chocolate'>Home Page</h1>");
    // res.sendStatus(200);

});


app.post("/register", (req, res) =>{

    res.sendStatus(201);

});


app.put("/user/keshav", (req, res) =>{

    res.sendStatus(200);

});

app.patch("/user/keshav", (req, res) =>{

    res.sendStatus(200);

});

app.delete("/user/keshav", (req, res) =>{

    res.sendStatus(200);

});




app.listen(port, () =>{

    console.log(`Server is running on port ${port}`);

});