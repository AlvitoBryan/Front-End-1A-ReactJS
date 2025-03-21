import React from 'react'

export const FormInput = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    required = false,
}) => {
  return (
    <div className='flex flex-col items-start self-stretch h-[76px] w-full max-w-[518px]'>
        {label && (
            <label htmlFor={name} className='flex items-end gap-1 w-[110px] pr-[16px] pl-0 pb-1 text-[rgba(74,80,92,1)] text-base font-normal leading-[1.4] tracking-[0.2px] font-[DM_Sans] '>
                {label}
                {required && <p className='text-[#D32E1F] font-[Poppins] text-base font-normal leading-6 tracking-[0.15px]'>*</p>} 
            </label>
        )}
        <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className='h-12 flex flex-col flex-1 items-start self-stretch rounded-md border border-[#F1F1F1] px-[10px] py-[12px] text-base font-normal leading-[1.4] tracking-[0.2px] font-[DM_Sans] outline-none transition-all duration-300 ease-in-out'
        ></input>

        {error && (
            <p className='text-sm text-red-500'>
                {error}
            </p>
        )}
    </div>
  )
}



export const InputPassword = ({
    label,
    name,
    type = 'password',
    value,
    onChange,
    required = false,

}) => {
  return (
    <div className='flex flex-col items-start self-stretch h-[76px]'>
      <label htmlFor={name} className='flex w-[110px] pr-[16px] pl-0 pb-1 items-end gap-1 text-[#4A505C] font-[DM_Sans] text-base font-normal leading-[1.4] tracking-[0.2px]'>
        {label}
        {required && <p className='text-[#D32E1F] font-[Poppins] text-base font-normal leading-6 tracking-[0.15px]'>*</p>}
      </label>

      <div className='h-12 p-[12px_10px] flex items-center self-stretch rounded-md border border-[#F1F1F1] gap-[8px] transition-all duration-300 ease-in-out"'>
        <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className='w-full font-[DM_Sans] text-base font-normal leading-[140%] tracking-[0.2px] text-[#4A505C] outline-none border-none'
        ></input>

        <button type='button' className='w-[24px] h-[24px] border-none outline-none bg-[#FFF] cursor-pointer'>
            <img src='/src/assets/toggle-password.svg' className='max-w-none' />
        </button>
      </div>
    </div>
  )
}
