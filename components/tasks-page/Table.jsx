import React from 'react'

const taskHeadings = [
    {title:"#კოდი",},
    {title:"თასქი",},
    {title:"აღწერა",},
    {title:"სტატუსი",},
    {title:"მინიჭებულია",},
    {title:"პრიორიტეტი",},
    {title:"შეიქმნა",},
    {title:"ვადა",},
    {title:"ავტორი",},
]


const Table = () => {
  return (
    <div >
        <div className='mt-5  border border-zinc-400  mx-10 rounded-lg'>
            <div className=' border-b border-zinc-400'>
            <h2 className='font-medium py-2 px-2'>შესასრულებელი <span className='bg-red-600/10 text-red-600 px-2.5 py-1 rounded-full'>3</span></h2>
            </div>
        <div className='flex justify-between items-center font-medium text-zinc-600 px-2 border-y border-zinc-400'>

            {taskHeadings.map((heading) => (
                <p key={heading}>{heading.title}</p>
            ))}

            </div>



        </div>
    </div>
  )
}

export default Table