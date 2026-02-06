import express from "express";
const app = express();
const port = 3000;


import ejs from "ejs";


app.get("/", (req, res)=>{

    const today = new Date("January 27, 2002 01:15:00");
    const day = today.getDay();

    if (day === 0 || day === 6) {
        var dayType = "the weekend";
        var adv = "its time to click photos";
    }

    else{

        var dayType = "a weekday";
        var adv = "its time to work hard";

    }



    res.render("index.ejs", {type: dayType, advice: adv});

});








app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});