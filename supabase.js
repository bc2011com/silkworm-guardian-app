// supabase.js
// ไฟล์กลางสำหรับสร้าง Supabase client ใช้ทุกหน้า

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// TODO: ใส่ค่าจริงของโปรเจกต์ Supabase อาจารย์
const supabaseUrl = "https://dtvtjioijdusoluuyius.supabase.co"
const supabaseKey = "sb_publishable_yCqK4_WA6kjQEQ9QkpRuEQ_d3KLueBQ"

export const supabase = createClient(supabaseUrl, supabaseKey);
