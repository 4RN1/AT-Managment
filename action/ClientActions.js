"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// getting cookies ---------------------
const getSupabase = async () => {
  const cookieStore = await cookies();
  return createClient(cookieStore);
};

// GET DATA ---------------------
export const get = async (table, columns = "*") => {
  const supabase = await getSupabase();
  const { data: result, error } = await supabase.from(table).select(columns);
  if (error) throw new Error(error.message);
  return result;
};


// ADD DATA ---------------------
export const add = async (table, formData, path) => {
  const supabase = await getSupabase();
  const { error } = await supabase.from(table).insert(formData);
  if (error) throw new Error(error.message);
  revalidatePath(path);
};

// EDIT DATA ---------------------
export const edit = async (table, formData, path) => {
  const supabase = await getSupabase();
  const { error } = await supabase
    .from(table)
    .update(formData)
    .eq("id", formData.id);

  if (error) throw new Error(error.message);
  revalidatePath(path);
};

// DELETE DATA ---------------------

export const deleteInfo = async (table, id, path) => {
  const supabase = await getSupabase();
  const { error } = await supabase.from(table).delete().eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath(path);
};



//  COUNT DATA 

export const getCount = async (table, column, value) => {
  const supabase = await getSupabase();
  
  const { count, error } = await supabase
    .from(table)
    .select(column, { count: "exact", head: true })
    .eq(column, value);

  if (error) throw new Error(error.message);
  return count;
};


export const getWhere = async (table, column, value, columns = "*") => {
  const supabase = await getSupabase();
  const { data, error } = await supabase
    .from(table)
    .select(columns)
    .eq(column, value);

  if (error) throw new Error(error.message);
  return data;
};
