import { getSupabase } from "./ClientActions"




export const income = async () => {
const supabase = await  getSupabase()

const { data, error } = await supabase.from("deals")
    .select("amount")
    .eq("type", "income").eq("status", "paid");

      if (error) throw new Error(error.message);

    return data.reduce((sum, t) => sum + t.amount, 0);


}



export const expense = async () => {
const supabase = await getSupabase()

const { data, error } = await supabase.from("deals").select("amount").eq("type", "expense").eq("status", "paid");

      if (error) throw new Error(error.message);

    return data.reduce((sum, t) => sum + t.amount, 0);

}


export const netIncome = async () => {
  const supabase = await getSupabase();

  const { data, error } = await supabase
    .from("deals")
    .select("amount, type")
    .eq("status", "paid");

  if (error) throw new Error(error.message);

  const total = data.reduce((sum, t) => {
    if (t.type === "income") return sum + t.amount;
    if (t.type === "expense") return sum - t.amount;
    return sum;
  }, 0);

  return total;
};