import * as React from 'react'
import Card from './Card'

const TitleCard = ({ title, children, styles='' }: {
  title: string,
  children: any,
  styles?: string
}) => {
  return (
    <Card styles={styles}>
      <div className="bg-red-400 py-5 w-full">
      <h1 className="text-center text-4xl font-extrabold text-gray-700">{title}</h1>
      </div>
      <div className={`text-lg text-gray-800 my-2 px-3 py-3`}>
      {children}
      </div>
    </Card>
  )
}

export default TitleCard
