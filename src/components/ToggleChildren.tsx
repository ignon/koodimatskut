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


const ToggleChildren = ({ text, children, className='', divClassName='', onOpen }: {
  text: string,
  className?: string,
  divClassName?: string
  children: React.ReactNode,
  onOpen?: any
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={divClassName}>
      <button
        onClick={() => {
          const newIsOpen = !isOpen
          setIsOpen(newIsOpen)
          if (newIsOpen && onOpen) {
            onOpen()
          }
        }}
        className={`
          ${className}
          text-xl text-gray-700
          hover:text-gray-400
          flex-none
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
