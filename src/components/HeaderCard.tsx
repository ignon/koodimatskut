import * as React from 'react'
import { useState } from 'react'
import Toggle from '../components/Toggle'
import Card from '../components/Card'
import analytics from '../analytics'
import { getSeason } from '../hooks/useSeasons'

const HeaderCard = ({ children }: {
  children: any
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showDomain, setShowDomain] = useState(false);

  const title = (!showDomain)
    ? 'Koodimatskut'
    : 'Koodimatskut.fi'

  const titleColor = getSeason() === 'summer'
    ? 'text-[#f0fdfa] drop-shadow-[0_0.6px_0.6px_rgba(0,0,0,0.8)]'
    : 'text-gray-600'

  const textColor = getSeason() === 'summer'
    ? 'text-gray-600'
    : 'text-gray-700'

  return (
    <div className="flex flex-col justify-start align-center my-4 w-full px-2">
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
        textStyle='text-gray-600'
      />

      {!isOpen || (
        <Card>
          <div className="bg-red-400 py-5 w-full">
            <h1 className="text-center text-4xl font-extrabold text-gray-700">Opettajan materiaalit</h1>
          </div>
          <div className={`text-lg text-gray-800 my-8 px-3 py-3`}>
            {children}
          </div>
        </Card>
      )}

    </div>
  )
}

export default HeaderCard;
