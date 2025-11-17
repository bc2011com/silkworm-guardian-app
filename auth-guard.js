// auth-guard.js
import { supabase } from "./supabase.js";

async function guard() {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("auth-guard error:", error);
  }

  // ถ้าไม่มี user ให้เด้งกลับหน้า login
  if (!data || !data.user) {
    window.location.href = "login.html";
    return;
  }

  // ถ้ามี user แล้ว ลองดึงข้อมูลโปรไฟล์มาแสดง (ถ้าต้องการ)
  try {
    const userId = data.user.id;

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("full_name, username, farm_name")
      .eq("user_id", userId)
      .maybeSingle();

    if (profileError) {
      console.error(profileError);
      return;
    }

    // ใส่ชื่อ / ฟาร์ม ลงใน span ที่หน้า dashboard
    const nameSpan = document.getElementById("farmer-name");
    const farmSpan = document.getElementById("farm-name");

    if (nameSpan && profile?.full_name) {
      nameSpan.textContent = profile.full_name;
    }
    if (farmSpan && profile?.farm_name) {
      farmSpan.textContent = profile.farm_name;
    }
  } catch (e) {
    console.error(e);
  }
}

// เรียกใช้ทันทีเมื่อ load script
guard();
