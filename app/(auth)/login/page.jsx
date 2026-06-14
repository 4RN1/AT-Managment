"use client"
import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async () => {
    setLoading(true)
    setError('')


    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('მეილი ან პაროლი არასწორია')
      setLoading(false)
      return
    }

    router.push('/')
  }

  const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    handleLogin();
  }
};

  return (
    <div className='h-screen flex items-center'>
      <div className='flex flex-col w-full max-w-100 mx-auto gap-2 border border-zinc-400 rounded-md py-4 px-2'>
        <h1 className='text-center text-2xl mb-5'>შესვლა</h1>

        <label htmlFor="email">მომხმარებლის მეილი</label>
        <input
          type="email"
          id="email"
          placeholder='example@gmail.com'
          onKeyDown={handleKeyDown}
          className='py-1 px-2 border border-zinc-400 rounded-md'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">პაროლი</label>
        <input
          type="password"
          id="password"
          onKeyDown={handleKeyDown}
          placeholder='*********'
          className='py-1 px-2 border border-zinc-400 rounded-md'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className='text-red-500 text-sm'>{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          className='bg-[#049669] py-2 mt-5 text-white font-medium rounded-md cursor-pointer hover:bg-[#0f8864] disabled:opacity-50'
        >
          {loading ? 'მიმდინარეობს...' : 'შესვლა'}
        </button>
      </div>
    </div>
  )
}

export default Page