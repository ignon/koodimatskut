import * as React from 'react'
import { useState } from 'react'
import Toggle from './Toggle'
import TitleCard from './TitleCard'
import Card from './Card'
import analytics from '../analytics'
import { getSeason } from '../hooks/useSeasons'
import { MdShare } from 'react-icons/md'

const HeaderCard = ({ children }: {
  children: any
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showDomain, setShowDomain] = useState(false);

  const title = (!showDomain)
    ? 'Koodimatskut'
    : 'Koodimatskut.fi'

  const textColor = 'text-gray-700'
  const titleColor = getSeason() === 'summer'
    ? 'text-[#f0fdfa] drop-shadow-[0_0.6px_0.6px_rgba(0,0,0,0.9)]'
    : 'text-gray-600'


  return (
    <div className="flex flex-col justify-start align-center my-4 w-full">
      <h1
        className={`text-center mt-7 text-5xl sm:text-6xl font-extrabold text-gray-600 ${titleColor} overflow-hidden`}
        onClick={() => setShowDomain(!showDomain)}
      >
        {title}
      </h1>
      <p className={`text-center mt-7 mb-5 mx-3 text-lg ${textColor}`}>
        Koodimatskut.fi on tarkkaan valikoitu lista ohjelmoinnin pelillisiä harjoituksia organisoituna järkevään etenemisjärjestykseen.
      </p>

      <Toggle
        text="Opettajalle"
        isOpen={false}
        onClick={() => {
          if (!isOpen) {
            analytics.sendEvent('ForTeacher', { cardSlug: 'opettajalle' })
          }
          setIsOpen(!isOpen)
        }}
        className="py-3 text-gray-600"
      />

      {!isOpen || (
        <div>
          <TitleCard title='Opettajan materiaalit'>
            {children}
          </TitleCard>
          <ShareButton />
        </div>
      )}

    </div>
  )
}

const ShareButton = () => {
  if (!navigator.share) {
    return null
  }
  const shareData = {
    title: 'Koodimatskut.fi',
    url: 'https://koodimatskut.fi?utm_source=share'
  }

  return (
    <Card styles='bg-red-500 hover:brightness-150 py-1 my-0'>
      <button
        className='flex flex-row justify-center text-white'
        onClick={async () => {
          try {
            await navigator.share(shareData)
            analytics.sendEvent('Share')
          }
          catch { }
        }}
      >
        <MdShare size={80} className='text-inherit flex-0 mr-10 my-0 py-0' />
        <p className='text-5xl text-inherit py-0 my-0 pr-3 mt-3 font-extrabold flex-0 ml-3'>Jaa </p>
      </button>
    </Card>
  )
}

export default HeaderCard;
