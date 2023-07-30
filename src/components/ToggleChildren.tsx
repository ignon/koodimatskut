import * as React from 'react'
import { useState } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'


const ToggleIcon = ({ isOpen }: {
  isOpen: boolean,
}) => {
  return (isOpen)
    ? <MdExpandLess className="inline-block"/>
    : <MdExpandMore className="inline-block"/>
}


const ToggleChildren = ({ text, children, className='' }: {
  text: string,
  className?: string,
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          text-xl text-gray-700
          hover:text-gray-400
          flex-none
          ${className}
      `}>
        <div className="block flex-none shrink-1">
          {text} <ToggleIcon isOpen={isOpen} />
        </div>
      </button>
      {!isOpen || children}
    </div>
  )
}

export default ToggleChildren