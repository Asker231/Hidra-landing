import React from 'react'
import { IButton } from '../../interfaces/IButton'

import cn from 'classnames'

function Button({className,children,...props}:IButton){
  return <button  className={cn('flex py-2 px-4 rounded-2xl gradientButton text-xs font-bold',className)}  {...props}>{children}</button>
}

export default Button