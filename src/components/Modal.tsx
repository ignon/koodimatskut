import Toggle from '../components/Toggle'
import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md'


const CloseButton = ({ onClose }: {
  onClose: any
}) => {
  return (
    <MdClose className="flex-1" size={60} />
  )
}

const Modal = ({ isOpen, onClose, children }: {
  isOpen: boolean,
  onClose: any,
  children: any
}) => {

  useEffect(() => {
    var bodyOverflowStyle = isOpen ? 'hidden' : 'unset'
    document.body.style.overflow = bodyOverflowStyle
  }, [])


  const visibility = isOpen ? 'visible' : 'hidden'

  return (
    <div className={`${visibility} fixed inset-0 flex flex-col h-full z-50 bg-black/75`}>
      <div className={`
        flex flex-col justify-center items-center bg-white overflow-x-hidden w-7/12 min-h-screen rounded-3xl
        mx-auto
      `}>
      <div className="w-full flex flex-row justify-center bg-red-400 shadow-md shadow-black/30 py-4">
        <div className={`flex-1 text-center text-5xl font-bold text-gray-700`}>
          Opettajalle
        </div>
        <div className="relative mr-5 text-gray-700">
          <CloseButton onClose={onClose} />
        </div>
      </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden">{children}</div>
        {/* <button */}
        {/*   className="mt-4 px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-700" */}
        {/*   onClick={onClose} */}
        {/* > */}
        {/*   Close */}
        {/* </button> */}
      </div>
    </div>
  );
};

export const ToggleModal = ({ toggleText, children }: {
  toggleText: string,
  children: any
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Toggle
        text={toggleText}
        isOpen={false}
        onClick={() => setIsOpen(!isOpen)}
        className="py-3 text-gray-500 inline-block"
      />
      <div className={isOpen ? 'visible' : 'hidden'}>
        {children}
      </div>
    </div>
  )
}

export default Modal;
