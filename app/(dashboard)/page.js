import StatCard from "@/components/dashboard/StatCard";
import Priority from "../../components/dashboard/Priority";
import { Calendar } from "@/components/Calendar";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LuTrendingDown, LuTrendingUp } from "react-icons/lu";
import { IoIosConstruct } from "react-icons/io";
import { get } from "@/action/ClientActions";
import TransactionList from "@/components/dashboard/TransactionList";



export default async function Home() {

 
  const tasks = await get( "tasks", "title, priority, due_date, created_at, description, status, id, assigned:profiles!assigned_to(name)" , 10 , {column:"created_at" , ascending: false })

  const transactions = await get("deals" , " id,  created_at, payment_method, amount, status , clients (company)", 10, {column: "created_at" , ascending:true})


  return (
<div className="min-h-screen px-10 py-10 bg-zinc-50 space-y-5">

      {/* TOP SECTION */}
      <div className="grid grid-cols-5 gap-5 items-start ">
        
        <div className="grid grid-cols-2 col-span-3 gap-5">
          <StatCard title="სულ ბალანსი" stat={6700} icon={MdOutlineAccountBalanceWallet} bgColor="#EEF2FF" iconColor="#6366f1"/>
          <StatCard title="სულ შემოსავალი" stat={12000} icon={LuTrendingUp} bgColor="#ECFDF9" iconColor="#22c55e"/>
          <StatCard title="სულ ხარჯი" stat={5300} icon={LuTrendingDown} bgColor="#FFF1F2" iconColor="#f43f5e"/>
          <StatCard title="მალე..." stat={0} icon={IoIosConstruct} bgColor="#F5F3FF" iconColor="#a855f7"/>
        </div>
        <div className="col-span-2">
          <Calendar />
        </div>

      </div>

      {/* BOTTOM SECTION */}
       <div className="grid grid-cols-6 gap-5 items-start">
        <div className="col-span-2 ">
          <Priority tasksInfo={tasks} />
        </div>
        <div className="col-span-4 gap-5">
          <TransactionList transactions={transactions}/>
        </div>
       </div>

    </div>
  );
}