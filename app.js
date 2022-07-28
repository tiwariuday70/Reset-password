require("dotenv").config();
const passwordReset = require("./routes/passwordReset");
const users = require("./routes/users");
const connection = require("./dtabase");
const express = require("express");
const app = express();

connection();

app.use(express.json());

app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
