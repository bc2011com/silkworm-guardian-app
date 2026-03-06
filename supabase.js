import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://dtvtjioijdusoluuyius.supabase.co";
const supabaseAnonKey = "sb_publishable_yCqK4_WA6kjQEQ9QkpRuEQ_d3KLueBQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
