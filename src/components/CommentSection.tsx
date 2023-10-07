import React from 'react'
import ToggleChildren from './ToggleChildren'
import Comments from './Comments'

const CommentSection = ({ id, title, visible=true }: {
  title: string,
  id: string,
  visible?: boolean
}) => {

  return (
    <div className='text-center text-lg pt-5'>
      <ToggleChildren
        text='Kommentit'
        className='text-center pb-5'
      >
        <p className="italic">
          Esitä harjoitukseen ja sen ohjeisiin liittyviä kysymyksiä, havaintoja tai parannusehdotuksia <br />(tai kerro vain miten tunti meni!)
        </p>
        <Comments
          id={id}
          title={title}
          visible={visible}
          className='pt-10'
        />
      </ToggleChildren>
    </div>
  )
}

export default CommentSection
