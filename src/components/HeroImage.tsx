import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'


const HeroImage = ({ heroImage, altText }: {
  heroImage: any,
  altText: string
}) => (
    <div className="imageContainer w-full relative">
      {heroImage &&
        <GatsbyImage
          image={heroImage}
          alt={altText}
          className="w-full block"
        />
      }

      {/* Hover effect */}
      <div className="absolute bg-black transition ease-in-out duration-50 inset-0 opacity-0 hover:opacity-20" />
    </div>
)


export default HeroImage
