import { getSupabase } from "@/action/ClientActions";
import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";




const DashboardLayout = async  ({ children }) => {

  const supabase = await getSupabase()
 const { data: { user } } = await supabase.auth.getUser()
  

const { data: profile } = await supabase
  .from('profiles')
  .select('name')
  .eq('id', user.id)
  .single()

if (!user) redirect('/login')

  return (
    <div className="h-full flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1 min-h-0">
        <Navbar  user={profile?.name}/>
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout