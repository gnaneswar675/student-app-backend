const { createClient } = require("@supabase/supabase-js");

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.error("❌ Missing Supabase credentials in .env file!");
  console.error("Please set SUPABASE_URL and SUPABASE_KEY in your .env file");
  process.exit(1);
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = supabase;