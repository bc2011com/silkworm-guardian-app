import { supabase } from "./supabase.js";

/*
  ตรวจสอบว่าผู้ใช้ login อยู่หรือไม่
  ถ้าไม่ login จะพาไปหน้า login.html
*/

export async function requireAuth() {

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Auth error:", error);
    window.location.href = "login.html";
    return { user: null };
  }

  const user = data?.user;

  if (!user) {
    window.location.href = "login.html";
    return { user: null };
  }

  return { user };
}
