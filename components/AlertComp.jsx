
import {  motion } from 'motion/react'
import React from 'react'
import { IoInformationCircleOutline } from 'react-icons/io5'

const styles = {
  success: "bg-green-300 border-green-500 text-green-900",
  delete: "bg-red-300 border-red-500 text-red-900",
  update: "bg-blue-300 border-blue-500 text-blue-900",
}

const AlertComp = ({ text, type = "success" }) => {
  return (
  
    <motion.div
    initial={{  opacity: 0, x:100  }}
    animate={{ opacity: 1, x:0 }}
    exit={{ opacity: 0, x:100 }}
    role="alert"
    className={`${styles[type]} border-l-4  p-2 rounded-lg flex items-center fixed top-5 right-5 text-xl`}

  > 
    <IoInformationCircleOutline size={25} />
    <p className="font-semibold">{text}</p>
  </motion.div>

  )
}

export default AlertComp