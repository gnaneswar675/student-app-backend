const supabase = require("../config/db");

// Add student
exports.addStudent = async (req, res) => {
  const { name, email, age, course } = req.body;

  console.log("Incoming data:", req.body); // 🔥 ADD THIS

  const { data, error } = await supabase
    .from("students")
    .insert([{ name, email, age, course }]);

  if (error) {
    console.error("🔥 SUPABASE ERROR:", error); // 🔥 VERY IMPORTANT
    return res.status(500).json(error);
  }

  res.json(data);
};

// Get all students
exports.getStudents = async (req, res) => {
  const { data, error } = await supabase
    .from("students")
    .select("*");

  if (error) return res.status(500).json(error);

  res.json(data);
};

// Delete student
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("students")
    .delete()
    .eq("id", id);

  if (error) return res.status(500).json(error);

  res.json({ message: "Deleted successfully" });
};
