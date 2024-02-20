import React from 'react'
import { CustomButtonProps } from '@/types'

export default function CustomButton({isDisabled,btnType,textStyles,title,handleClick,containerStyles}:CustomButtonProps) {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={`${containerStyles} ${textStyles}`}
      onClick={handleClick}
      
    >
      {title}
    </button>
  )
}
