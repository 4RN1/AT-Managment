import { Wave } from '@/components/wave'
import React from 'react'

const loading = () => {
  return (
    <div className="flex items-center flex-col justify-center h-150 text-center text-green-400">
      <Wave className="w-48 h-24" />


    </div>
  )
}

export default loading