import React from 'react'
import { IoMdSettings } from 'react-icons/io'

const Table = () => {

    const clientInfo = [
        {
            id:1,
            name:"Nova Building corp",
            email:"NovaBuilding@gmail.com",
            status:"მუშაობის პროცესში",
            notes:"ცინიკური დამოკიდებულება",
            created_at:"22.05.2026",
            updated_at:"24.05.2026" 
        },
        {
            id:2,
            name:"Dental Clinic SUPO",
            email:"ClinicSUPO@gmail.com",
            status:"დასრულებულია",
            notes:"შესაძლებელია ახალ პროექტებზე მუშაობა",
            created_at:"22.05.2026",
            updated_at:"24.05.2026"   
        },
        {
            id:3,
            name:"Travel Mountains Org",
            email:"TravelMountains@gmail.com",
            status:"განსახილველი",
            notes:"მზარდი კომპანია",
            created_at:"22.05.2026",
            updated_at:"24.05.2026" 
        }
    ]


    const tableInfo = ["","N" , "კლიენტი/ორგანიზაცია" , "ელფოსტა", "სტატუსი" , "კომენტარები" , "დამატებულია", "განახლებულია", ]

  return (
 <table className='w-full'>
  <thead >
    <tr >
      {tableInfo.map((header) => (
        <th key={header} className='not-first:border border-zinc-400 text-left p-2 '>{header}</th>
      ))}
    </tr>
  </thead>
  <tbody>

        {clientInfo.map((info) => (
    <tr key={info.id} className=''>
        <td className=' p-2  text-gray-400 border text-center '>
    <IoMdSettings  className='cursor-pointer'/>
  </td>
            <td className='border border-zinc-400 p-2'>{info.id}</td>
            <td className='border border-zinc-400 p-2'>{info.name}</td>
            <td className='border border-zinc-400 p-2'>{info.email}</td>
            <td className='border border-zinc-400 p-2'>{info.status}</td>
            <td className='border border-zinc-400 p-2'>{info.notes}</td>
            <td className='border border-zinc-400 p-2'>{info.created_at}</td>
            <td className='border border-zinc-400 p-2'>{info.updated_at}</td>
        
     </tr>
        ))}
   
  </tbody>
</table>
  )
}

export default Table