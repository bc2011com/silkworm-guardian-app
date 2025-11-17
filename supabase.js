// supabase.js
// ไฟล์กลางสำหรับสร้าง Supabase client ใช้ทุกหน้า

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// TODO: ใส่ค่าจริงของโปรเจกต์ Supabase อาจารย์
const SUPABASE_URL = "https://dpgnqrxanxyxhibkfspx.supabase.co";   // <- URL โปรเจกต์
const SUPABASE_ANON_KEY = "PASTE_YOUR_ANON_KEY_HERE";              // <- anon key จริงของอาจารย์

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
