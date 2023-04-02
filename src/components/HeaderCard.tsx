import * as React from 'react'
import { useState } from 'react'
import Toggle from '../components/Toggle'
import Card from '../components/Card'

const TITLE = 'Koodimatskut';

const HeaderCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showDomain, setShowDomain] = useState(false);

  const title = (!showDomain)
    ? 'Koodimatskut'
    : 'Koodimatskut.fi'

  return (
    <div className="flex flex-col justify-start align-center my-4 w-full px-2">
      <h1
        className="text-center mt-7 text-6xl font-extrabold text-gray-600"
        onClick={() => setShowDomain(!showDomain)}
      >
        {title}
      </h1>
      <p className="text-center mt-7 mb-5 mx-3 text-lg text-gray-800">
        Koodimatskut.fi on tarkkaan valikoitu lista ohjelmoinnin pelillisiä harjoituksia organisoituna järkevään etenemisjärjestykseen.
      </p>

      <Toggle
        text="Opettajalle"
        isOpen={false}
        onClick={() => setIsOpen(!isOpen)}
        className="py-3 text-gray-500"
      />

      {!isOpen || (
        <Card>
          <div className="bg-red-400 py-5 w-full">
            <h1 className="text-center text-4xl font-extrabold text-gray-700">Opettajan materiaalit</h1>
          </div>
          <div className="text-lg text-gray-800 my-8 px-3 py-3">
            <p>Koodimatskut.fi on tarkkaan valikoitu lista ohjelmoinnin pelillisiä harjoituksia järkevässä etenemisjärjestyksessä.</ p>
            <p>Tehtävät alkavat lukutaidottomille sopivilla harjoituksilla ja etenevät tavoitteellisesti käsite kerrallaan eteenpäin. Listan tarkoitus on tarjota opettajille mahdollisimman valmiiksi jäsenneltyä oppimateriaalia, joka ohjaa ja tukee oppituntien kulkua kuten matematiikan kirjakin. Kaikki tehtävät toimivat ilman tilien luontia, joko iPadilla tai suoraan selaimessa.</ p>
            <p>Materiaalia riittää ainakin 15 oppitunniksi. Scratch ja muut projektilähtöisemmät ympäristöt ovat toki rinnalle suositeltavia.</ p>
          </div>
        </Card>
      )}

    </div>
  )
}

export default HeaderCard;
