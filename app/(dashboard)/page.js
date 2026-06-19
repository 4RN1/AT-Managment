import StatCard from "@/components/dashboard/StatCard";
import Priority from "../../components/dashboard/Priority";
import { Calendar } from "@/components/Calendar";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LuTrendingDown, LuTrendingUp } from "react-icons/lu";
import { IoIosConstruct } from "react-icons/io";
import { get } from "@/action/ClientActions";
import TransactionList from "@/components/dashboard/TransactionList";
import { GiMoneyStack } from "react-icons/gi";
import { expense, income, netIncome } from "@/action/dashboardActions";
import SpendingChart from "@/components/Chart";



export default async function Home() {
 
  const tasks = await get( "tasks", "title, priority, due_date, created_at, description, status, id, assigned:profiles!assigned_to(name)" , 10 , {column:"created_at" , ascending: false })

  const transactions = await get("deals" , " id,  created_at, payment_method, amount, status , clients (company)", 10, {column: "created_at" , ascending:true})


// in Home()
const chartData = await get('deals', 'created_at, amount, type', 100, { column: 'created_at', ascending: true })

// group by month and sum income/expense
const grouped = chartData.reduce((acc, deal) => {
  const month = new Date(deal.created_at).toLocaleString('default', { month: 'short' })
  
  if (!acc[month]) {
    acc[month] = { month, Income: 0, Expand: 0 }
  }
  
  if (deal.type === 'income') {
    acc[month].Income += deal.amount
  } else if (deal.type === 'expense') {
    acc[month].Expand += deal.amount
  }
  
  return acc
}, {})

const formatted = Object.values(grouped)
const incomeValue = await income();
const expenseValue = await expense();
const netIncomeValue = await netIncome();

  return (
<div className="min-h-screen px-10 py-10 bg-zinc-50 space-y-5">

      {/* TOP SECTION */}
      <div className="grid grid-cols-5 gap-5 items-start ">
        
        <div className="grid grid-cols-2 col-span-3 gap-5">
          <StatCard title="სულ შემოსავალი" stat={incomeValue} icon={LuTrendingUp} bgColor="#ECFDF9" iconColor="#22c55e"/>
          <StatCard title="სულ ხარჯი" stat={expenseValue} icon={LuTrendingDown} bgColor="#FFF1F2" iconColor="#f43f5e"/>
          <StatCard title="მოგება " stat={netIncomeValue} icon={GiMoneyStack} bgColor="#CCFFCC" iconColor="#008000"/>
          <StatCard title="მალე..." stat={0} icon={MdOutlineAccountBalanceWallet} bgColor="#EEF2FF" iconColor="#6366f1"/>

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

       <div>
         <SpendingChart data={formatted}/>
       </div>

    </div>
  );
}