import express from "express";
import axios from "axios";

const app = express();

app.use(express.static("public"));

const API_URL = "https://v2.jokeapi.dev/joke"
const PORT = 3000;

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/Any");
        const data = result.data;
        console.log(result.data);

        res.render("index.ejs", { data : data });

    } catch (error) {

        console.log(error);

    }
});

app.post("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/Any");
        const data = result.data;
        console.log(result.data);

        res.render("index.ejs", { data : data });

    } catch (error) {

        console.log(error);

    }
})

app.listen(PORT, () => {
    console.log(`Listening to port : ${PORT}`);
})