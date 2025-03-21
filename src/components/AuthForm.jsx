import React from 'react'
import AuthHeader from './AuthHeader'

const AuthForm = ({children}) => {
  return (
    <div className='flex w-[590px] h-auto w-full max-w-[590px] p-[36px] flex-col justify-center justify-self-center self-center m-auto items-center gap-[36px] rounded-sm border border-[#F1F1F1] bg-[#FFF]'>
        {children}
    </div>
  )
}

export default AuthForm
