import Toggle from '../components/Toggle'
import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md'


const CloseButton = ({ onClose }: {
  onClose: any
}) => {
  return (
    <button onClick={onClose}>
      <MdClose className="flex-1" size={60}/>
    </button>
  )
}

const Modal = ({ isOpen, onClose, title, children }: {
  isOpen: boolean,
  onClose: any,
  children: any,
  title: string
}) => {

  useEffect(() => {
    var bodyOverflowStyle = isOpen ? 'hidden' : 'unset'
    document.body.style.overflow = bodyOverflowStyle
  }, [])


  const visibility = isOpen ? 'visible' : 'hidden'

  return (
    <div className={`${visibility} fixed inset-0 flex flex-col h-full z-50 bg-black/75`}>
      <div className={`
        flex flex-col justify-center items-center bg-white overflow-x-hidden w-7/12 min-h-[600px] rounded-3xl
        mx-auto my-auto
      `}>
      <div className="w-full flex flex-row justify-center bg-red-400 shadow-md shadow-black/30 py-4">
        <div className={`flex-1 text-center text-5xl font-bold text-gray-700`}>
          In English
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
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="py-3 text-gray-500 inline-block"
      />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title='In English'>
        {children}
      </Modal>
    </div>
  )
}

export default Modal;
