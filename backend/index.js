const express = require("express");
const cors = require("cors");
const axios = require('axios');


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try { 
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username:username, secret: username, first_name: username},
        {headers: {"private-key": "768aa8ca-f40f-4ca8-9039-5483e1937aee"}}
    )
    return res.status(r.status).json(r.data)
  } catch(err) {
    console.log(err)
    return res.status(err.response.status).json(err.response.status)
  }
});

app.listen(3001);