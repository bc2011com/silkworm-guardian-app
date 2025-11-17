// logout.js
import { supabase } from "./supabase.js";

const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await supabase.auth.signOut();
      window.location.href = "login.html";
    } catch (err) {
      console.error("logout error:", err);
      alert("ออกจากระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    }
  });
}
