const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern";
mongoose.connect(MONGODB_URI)
        .then(() => console.log("MongoDB Success!"))
        .catch(err => console.log(err));

// Serve up static assets
// app.use(express.static("/client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Use apiRoutes
// localhost:3000/api/
// app.use(routes); 

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function() {
  console.log(`==> Server now on port ${PORT}!`);
});
