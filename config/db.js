const { createClient } = require("@supabase/supabase-js");

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.error("❌ Missing Supabase credentials in environment variables.");
  console.error("Please set SUPABASE_URL and SUPABASE_KEY in Railway Project > Variables.");
  console.error("Available environment keys:", Object.keys(process.env).filter(key => key.includes("SUPABASE") || key.includes("PORT")));
  process.exit(1);
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = supabase;