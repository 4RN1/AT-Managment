import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1 min-h-0">
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout