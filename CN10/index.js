const app = require("express")();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const currentDate = new Date();

  res.send(`${currentDate.toLocaleDateString()}  ${currentDate.toLocaleTimeString()}`);
});

app
  .route("/user")
  .get((req, res) => res.send("Get all users"))
  .post((req, res) => res.send("Add new user"))
  .put((req, res) => res.send("Update user"))
  .delete((req, res) => res.send("Delete a user"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
