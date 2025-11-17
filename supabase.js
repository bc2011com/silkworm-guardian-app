// supabase.js
// ไฟล์กลางสำหรับสร้าง Supabase client ใช้ทุกหน้า

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// TODO: ใส่ค่าจริงของโปรเจกต์ Supabase อาจารย์
const SUPABASE_URL = "https://dpgnqrxanxyxhibkfspx.supabase.co";   // <- URL โปรเจกต์
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwZ25xcnhhbnh5eGhpYmtmc3B4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMjU5NjksImV4cCI6MjA3ODYwMTk2OX0.CTWYu4ZxS_gW6G4r0zGNNj6gVkNE6jSWmcGoXc6GaxI";              // <- anon key จริงของอาจารย์

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
