import React from 'react'
import { IButton } from '../../interfaces/IButton'

import cn from 'classnames'

function Button({typeB,className,children,...props}:IButton){
  return <button  className={cn( 'flex items-center justify-center rounded-2xl gradientButton text-xs font-bold h-[48px]',className,typeB == "S" ? 'w-[150px] ':'w-[214px]')}  {...props}>{children}</button>
}

export default Button