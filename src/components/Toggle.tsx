import * as React from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'


export const ToggleIcon = ({ isOpen }: {
  isOpen: boolean
}) => {
  return (isOpen)
    ? <MdExpandLess className="inline-block"/>
    : <MdExpandMore className="inline-block"/>
}


const Toggle = ({ text, onClick, isOpen }: {
  text: string,
  isOpen: boolean
  onClick: any,
}) => {


  return (
    <button
      onClick={onClick}
      className={`
        text-xl text-gray-700
        hover:text-gray-400
        pt-3
        flex-none
    `}>
      <div className="block flex-none shrink-1">
        {text} <ToggleIcon isOpen={isOpen} />
      </div>
    </button>
  )
}

export default Toggle
