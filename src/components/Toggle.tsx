import * as React from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'


export const ToggleIcon = ({ isOpen }: {
  isOpen: boolean,
}) => {
  return (isOpen)
    ? <MdExpandLess className="inline-block"/>
    : <MdExpandMore className="inline-block"/>
}


const Toggle = ({ text, onClick, isOpen, className }: {
  text: string,
  isOpen: boolean
  onClick: any,
  className?: string
}) => {


  return (
    <button
      onClick={onClick}
      className={`
        text-2xl text-gray-700
        hover:text-gray-400
        flex-none
        ${className ?? ''}
    `}>
      <div className="block flex-none shrink-1">
        {text} <ToggleIcon isOpen={isOpen} />
      </div>
    </button>
  )
}

export default Toggle
