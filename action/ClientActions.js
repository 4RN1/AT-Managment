"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const addClient = async (formData) => {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.from("clients").insert({
    name: formData.get("name"),
    company: formData.get("company"),
    industry: formData.get("industry"),
    project: formData.get("project"),
    email: formData.get("email"),
    status: formData.get("status"),
    notes: formData.get("notes"),

  });

  if(error) throw new Error(error.message)

    revalidatePath("/clients")
};


export const editClient = async (formData) => {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { error } = await supabase
  .from('clients')
  .update({ 
    name: formData.name,
    company: formData.company,
    industry: formData.industry,
    project: formData.project,
    email: formData.email,
    status: formData.status,
    notes: formData.notes,
  })
  .eq("id", formData.id)

  if(error) throw new Error(error.message)

    revalidatePath("/clients")

}

export const deleteClient = async (id) => {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
 
  const {error} = await supabase
  .from('clients')
  .delete()
  .eq('id', id)

  if(error) throw new Error(error.message)

    revalidatePath("/clients")
}



