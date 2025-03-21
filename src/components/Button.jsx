import React from 'react'

export const Button = ({
    text = "Masuk",
    bgClass = "bg-[var(--Primary-100,_rgba(226,252,217,0.8))]",
    textColor = "text-[var(--Primary-Default,#3ECF4C)]",
    widthButton = "w-full",
    hoverBtn = "hover:bg-[var(--Primary-Default,#3ECF4C)] hover:text-[var(--text-light-primary,#FFF)]",
    onclick,
}) => {
  return (
    <button className={`flex ${widthButton} h-[42px] flex-col justify-center items-center rounded-[10px] ${bgClass} border-none outline-none ${textColor} self-stretch font-[DM_Sans] text-base font-bold leading-[140%] tracking-[0.2px] transition-colors duration-300 ease-linear ${hoverBtn}` } onClick={onclick}>
        {text}
    </button>
  )
}

export const GoogleLogin = ({
    text = "Masuk dengan Google",
    img = "/src/assets/logos_google-icon.svg",
    hoverBtn = "hover:border-[1px] hover:border-[var(--Primary-Default,#3ECF4C)] hover:shadow-[0_0_0_4px_rgba(62,207,76,0.3)]"
}) => {
    return (
        <button className={`flex w-full h-[42px] flex-row justify-center items-center rounded-[10px] gap-[8px] border border-[var(--Other-Border,#F1F1F1)] bg-[var(--text-light-primary,#FFF)] Copytransition-[border-color,box-shadow] duration-300 ease-in-out ${hoverBtn} text-[var(--text-dark-secondary,#4A505C)] font-[DM_Sans] text-base font-bold leading-[140%] tracking-[0.0px]`}>
            <img src={img} />
            {text}
        </button>
    )
}

export default Button
