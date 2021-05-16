const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const port = 8080;

// Add the Key provided in the email here
const encodedCredentials = "Add_key_here";

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.post("/", async (req, res) => {
  const { url } = req.body;
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
    },
  });
  const data = await response.json();
  res.send(data);
});

app.listen(port, () => console.log(`Server running on ${port}!`));
