"use server"


import { redirect } from "next/navigation"
import { getSupabase } from "./ClientActions"

export const logout = async () => {

    const supabase = await getSupabase()
    await supabase.auth.signOut()
    redirect('/login')
}

