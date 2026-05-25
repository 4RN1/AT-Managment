import Table from '@/components/client-page/Table'
import { createClient } from '@/utils/supabase/server'  // <- changed
import { cookies } from 'next/headers'
import React from 'react'

const Page = async () => {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore);  // <- pass cookieStore
  const { data, error } = await supabase.from('clients').select('id, name, email, status, notes, created_at, company, industry, project')

  if(error) return <div>შეცდომა: {error.message}</div>

  return (
    <div>
      <Table clientInfo={data}/>
    </div>
  )
}

export default Page