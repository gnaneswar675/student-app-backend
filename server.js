const express = require("express");
const cors = require("cors");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ status: "ok", env: { supabaseUrl: !!process.env.SUPABASE_URL, supabaseKey: !!process.env.SUPABASE_KEY } });
});

app.use("/students", studentRoutes);
const PORT = process.env.PORT || 5000;

console.log("SUPABASE_URL", process.env.SUPABASE_URL ? "set" : "missing");
console.log("SUPABASE_KEY", process.env.SUPABASE_KEY ? "set" : "missing");
console.log("PORT", PORT);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
